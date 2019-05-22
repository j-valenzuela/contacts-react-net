using jvContacts.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace jvContacts.Persistence.Configuration
{
  public class ContactConfiguration : IEntityTypeConfiguration<Contact>
  {
    public void Configure(EntityTypeBuilder<Contact> builder)
    {
      builder.Property(c => c.Id)
         .HasColumnName("Id");

      builder.Property(p => p.FirstName).HasMaxLength(80)
          .HasColumnName("FirstName")
          .HasColumnType("nvarchar(80)")
          .HasDefaultValue("").IsRequired();

      builder.Property(p => p.LastName).HasMaxLength(80)
          .HasColumnName("LastName")
          .HasColumnType("nvarchar(80)")
          .HasDefaultValue("").IsRequired();

      builder.Property(c => c.Email).HasMaxLength(500)
          .HasColumnName("Email")
          .HasColumnType("nvarchar(500)")
          .HasDefaultValue("").IsRequired();

      builder.Property(c => c.PhoneNumber).HasMaxLength(20)
         .HasColumnName("PhoneNumber")
         .HasColumnType("nvarchar(20)")
         .HasDefaultValue("");

      builder.Property(c => c.ImageUrl).HasMaxLength(500)
          .HasColumnName("ImageUrl")
          .HasColumnType("nvarchar(500)")
          .HasDefaultValue("");

      builder.OwnsOne(a => a.Address).Property(a => a.Street1).HasMaxLength(80)
               .HasColumnName("Street1")
               .HasColumnType("nvarchar(80)")
               .IsRequired();

      builder.OwnsOne(a => a.Address).Property(a => a.Street2).HasMaxLength(80)
               .HasColumnName("Street2")
               .HasColumnType("nvarchar(80)");

      builder.OwnsOne(a => a.Address).Property(a => a.City).HasMaxLength(80)
               .HasColumnName("City")
               .HasColumnType("nvarchar(80)");

      builder.OwnsOne(a => a.Address).Property(a => a.State).HasMaxLength(80)
               .HasColumnName("State")
               .HasColumnType("nvarchar(80)");

      builder.OwnsOne(a => a.Address).Property(a => a.Country).HasMaxLength(80)
               .HasColumnName("Country")
               .HasColumnType("nvarchar(80)");

      builder.OwnsOne(a => a.Address).Property(a => a.ZipCode).HasMaxLength(10)
               .HasColumnName("ZipCode")
               .HasColumnType("nvarchar(10)");
      
    }
  }
}
