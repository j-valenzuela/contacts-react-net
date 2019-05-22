using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace jvContacts.Persistence.Context
{
  public class ContactsDbContextFactory : IDesignTimeDbContextFactory<ContactsDbContext>
  {
    public ContactsDbContext CreateDbContext(string[] args)
    {
      var dbContext = new ContactsDbContext(new DbContextOptionsBuilder<ContactsDbContext>().UseSqlServer(
         new ConfigurationBuilder()
             .AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), $"appsettings.json"))
             .Build()
             .GetConnectionString("DefaultConnection")
         ).Options);

      dbContext.Database.Migrate();
      new ContactsDataSeeder(dbContext).Seed();

      return dbContext;
    }
  }
}
