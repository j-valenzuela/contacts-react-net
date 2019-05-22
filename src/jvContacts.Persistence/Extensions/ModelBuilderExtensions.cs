using System;
using Microsoft.EntityFrameworkCore;
using jvContacts.Domain.Interfaces;
using System.Reflection;
using System.Linq;

namespace jvContacts.Persistence.Extensions
{
  public static class ModelBuilderExtensions
  {
    public static void ShadowProperties(this ModelBuilder modelBuilder)
    {
      foreach (var tp in modelBuilder.Model.GetEntityTypes())
      {
        var t = tp.ClrType;

        // set auditing shadow properties
        if (typeof(IAuditable).IsAssignableFrom(t))
        {
          var method = SetAuditingShadowPropertiesMethodInfo.MakeGenericMethod(t);
          method.Invoke(modelBuilder, new object[] { modelBuilder });
        }

        // set soft delete shadow property
        //if (typeof(ISoftDelete).IsAssignableFrom(t))
        //{
        //  var method = SetIsDeletedShadowPropertyMethodInfo.MakeGenericMethod(t);
        //  method.Invoke(modelBuilder, new object[] { modelBuilder });
        //}
      }
    }

    //private static readonly MethodInfo SetIsDeletedShadowPropertyMethodInfo = typeof(ModelBuilderExtensions).GetMethods(BindingFlags.Public | BindingFlags.Static)
    //    .Single(t => t.IsGenericMethod && t.Name == "SetIsDeletedShadowProperty");

    private static readonly MethodInfo SetAuditingShadowPropertiesMethodInfo = typeof(ModelBuilderExtensions).GetMethods(BindingFlags.Public | BindingFlags.Static)
        .Single(t => t.IsGenericMethod && t.Name == "SetAuditingShadowProperties");

    //public static void SetIsDeletedShadowProperty<T>(ModelBuilder builder) where T : class, ISoftDelete
    //{
    //  // define shadow property
    //  builder.Entity<T>().Property<bool>("IsDeleted");
    //}

    public static void SetAuditingShadowProperties<T>(ModelBuilder builder) where T : class, IAuditable
    {
      // define shadow properties
      builder.Entity<T>().Property<DateTime>("CreatedOn").HasDefaultValueSql("GetUtcDate()");
      builder.Entity<T>().Property<DateTime>("ModifiedOn").HasDefaultValueSql("GetUtcDate()");
      builder.Entity<T>().Property<string>("CreatedBy");
      builder.Entity<T>().Property<string>("ModifiedBy");
    }
  }
}
