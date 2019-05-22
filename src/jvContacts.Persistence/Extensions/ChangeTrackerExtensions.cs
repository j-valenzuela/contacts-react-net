using jvContacts.Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;

namespace jvContacts.Persistence.Extensions
{
  public static class ChangeTrackerExtensions
  {
    public static void SetShadowProperties(this ChangeTracker changeTracker, IUser userSession)
    {
      changeTracker.DetectChanges();

      var timestamp = DateTime.UtcNow;

      foreach (var entry in changeTracker.Entries())
      {
        if (entry.Entity is IAuditable)
        {
          if (entry.State == EntityState.Added || entry.State == EntityState.Modified)
          {
            entry.Property("ModifiedOn").CurrentValue = timestamp;
            entry.Property("ModifiedBy").CurrentValue = userSession.Name;
          }

          if (entry.State == EntityState.Added)
          {
            entry.Property("CreatedOn").CurrentValue = timestamp;
            entry.Property("CreatedBy").CurrentValue = userSession.Name;
          }
        }

        if (entry.State == EntityState.Deleted && entry.Entity is ISoftDelete)
        {
          entry.State = EntityState.Modified;
          entry.Property("IsDeleted").CurrentValue = true;
        }
      }
    }
  }
}
