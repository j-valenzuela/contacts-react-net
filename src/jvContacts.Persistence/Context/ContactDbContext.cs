using jvContacts.Application.Interfaces;
using jvContacts.Domain.Entities;
using jvContacts.Domain.Interfaces;
using jvContacts.Persistence.Configuration;
using jvContacts.Persistence.Extensions;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;

namespace jvContacts.Persistence.Context
{
  public class ContactDbContext : DbContext, IContactDbContext
  {
    private IUser _userSession;

    public ContactDbContext(DbContextOptions<ContactDbContext> options) : base(options)
    {
      
    }

    public ContactDbContext(DbContextOptions options, IUser userSession) : base(options)
    {
      _userSession = userSession;
    }

    public DbSet<Contact> Contacts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.ApplyConfiguration(new ContactConfiguration());
      modelBuilder.ShadowProperties();
      SetGlobalQueryFilters(modelBuilder);

      base.OnModelCreating(modelBuilder);
    }

    #region Global Query Filter
    private void SetGlobalQueryFilters(ModelBuilder modelBuilder)
    {
      foreach (var tp in modelBuilder.Model.GetEntityTypes())
      {
        var t = tp.ClrType;

        // set global filters
        if (typeof(ISoftDelete).IsAssignableFrom(t))
        {
          // softdeletable
          var method = SetGlobalQueryForSoftDeleteMethodInfo.MakeGenericMethod(t);
          method.Invoke(this, new object[] { modelBuilder });
        }
      }
    }

    private static readonly MethodInfo SetGlobalQueryForSoftDeleteMethodInfo = typeof(ContactDbContext).GetMethods(BindingFlags.Public | BindingFlags.Instance)
    .Single(t => t.IsGenericMethod && t.Name == "SetGlobalQueryForSoftDelete");

    public void SetGlobalQueryForSoftDelete<T>(ModelBuilder builder) where T : class, ISoftDelete
    {
      builder.Entity<T>().HasQueryFilter(item => !EF.Property<bool>(item, "IsDeleted"));
    }

    #endregion

    public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
    {
      ChangeTrackerExtensions.SetShadowProperties(ChangeTracker, _userSession);
      return await base.SaveChangesAsync(cancellationToken);
    }

  }
}
