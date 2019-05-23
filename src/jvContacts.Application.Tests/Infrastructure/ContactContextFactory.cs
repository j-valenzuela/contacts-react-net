using System;
using Microsoft.EntityFrameworkCore;
using jvContacts.Domain.Entities;
using jvContacts.Persistence.Context;
using jvContacts.Domain.ValueObjects;

namespace jvContacts.Application.Tests.Infrastructure
{
  public class ContactContextFactory
  {
    public static ContactDbContext Create()
    {
      var options = new DbContextOptionsBuilder<ContactDbContext>()
          .UseInMemoryDatabase(Guid.NewGuid().ToString())
          .Options;

      var context = new ContactDbContext(options);

      context.Database.EnsureCreated();

      var aquaman = new Contact
      {
        Id = new Guid("735bdfd9-ffe5-4fdc-98bc-55ccdd078ec4"),
        FirstName = "Arthur",
        LastName = "Curry",
        Email = "waterboy@atlantis.com",
        ImageUrl = "aquaman.jpg",
        Address = new ContactAddress
        {
          City = "Atlantis City",
          Street1 = "One Atlantis Way"
        }
      };
      var batman = new Contact
      {
        Id = new Guid("d424facc-c58b-4cd5-bcc0-1550662fd8ef"),
        FirstName = "Bruce",
        LastName = "Wayne",
        Email = "dark.knight@batcave.com",
        ImageUrl = "batman.jpg",
        Address = new ContactAddress
        {
          City = "Gotham City",
          Street1 = "The Batcave"
        }
      };
      var black_panther = new Contact
      {
        Id = new Guid("cc0bc2ed-8c1a-4c70-8de6-e6149f099a25"),
        FirstName = "King",
        LastName = "T'Challa",
        Email = "blackcat@wakandaforever.com",
        ImageUrl = "black_panther.jpg",
        Address = new ContactAddress
        {
          City = "Central Wakanda",
          Street1 = "The Royal Palace of Wakanda"
        }
      };

      context.Contacts.AddRange(aquaman, batman, black_panther);

      context.SaveChanges();

      return context;
    }

    public static void Destroy(ContactDbContext context)
    {
      context.Database.EnsureDeleted();

      context.Dispose();
    }
  }
}