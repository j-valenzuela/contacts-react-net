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
         .HasColumnName("Email")
         .HasColumnType("nvarchar(20)")
         .HasDefaultValue("");

      builder.Property(c => c.ImageUrl).HasMaxLength(500)
          .HasColumnName("ImageUrl")
          .HasColumnType("nvarchar(500)")
          .HasDefaultValue("");

      builder.OwnsOne(c => c.Address, a =>
      {
        a.Property(ca => ca.Street1).HasMaxLength(80)
               .HasColumnName("Street1")
               .HasColumnType("nvarchar(80)")
               .IsRequired();

        a.Property(ca => ca.Street2).HasMaxLength(80)
               .HasColumnName("Street2")
               .HasColumnType("nvarchar(80)");

        a.Property(ca => ca.City).HasMaxLength(80)
               .HasColumnName("City")
               .HasColumnType("nvarchar(80)");

        a.Property(ca => ca.State).HasMaxLength(80)
               .HasColumnName("State")
               .HasColumnType("nvarchar(80)");

        a.Property(ca => ca.Country).HasMaxLength(80)
               .HasColumnName("Country")
               .HasColumnType("nvarchar(80)");

        a.Property(ca => ca.ZipCode).HasMaxLength(10)
               .HasColumnName("ZipCode")
               .HasColumnType("nvarchar(10)");
      });
    }
  }
}
