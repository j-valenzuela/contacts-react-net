using Microsoft.EntityFrameworkCore;
using System;
using jvContacts.Persistence.Context;

namespace jvContacts.Application.Tests
{
  public class TestBase
  {
    public ContactDbContext GetDbContext(bool useSqlLite = false)
    {
      var builder = new DbContextOptionsBuilder<ContactDbContext>();
      if (useSqlLite)
      {
        builder.UseSqlite("DataSource=:memory:", x => { });
      }
      else
      {
        builder.UseInMemoryDatabase(Guid.NewGuid().ToString());
      }

      var dbContext = new ContactDbContext(builder.Options);
      if (useSqlLite)
      {
        // SQLite needs to open connection to the DB.
        // Not required for in-memory-database.
        dbContext.Database.OpenConnection();
      }

      dbContext.Database.EnsureCreated();

      return dbContext;
    }
  }
}
