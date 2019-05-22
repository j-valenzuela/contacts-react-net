using jvContacts.Persistence.Infrastructure;
using Microsoft.EntityFrameworkCore;

namespace jvContacts.Persistence.Context
{
  public class ContactDbContextFactory : DesignTimeDbContextFactoryBase<ContactDbContext>
  {
    protected override ContactDbContext CreateNewInstance(DbContextOptions<ContactDbContext> options)
    {
      return new ContactDbContext(options);
    }    
  }
}
