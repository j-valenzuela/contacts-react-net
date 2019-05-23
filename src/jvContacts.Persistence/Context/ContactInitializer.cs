using jvContacts.Domain.Entities;
using jvContacts.Domain.ValueObjects;
using System;
using System.Linq;

namespace jvContacts.Persistence.Context
{
  public class ContactInitializer
  {
    public static void Initialize(ContactDbContext context)
    {
      var initializer = new ContactInitializer();
      initializer.Seed(context);
    }

    public void Seed(ContactDbContext context)
    {
      context.Database.EnsureCreated();

      // Check if DB has already been seeded
      if (context.Contacts.Any())
      {
        return; 
      }

      var aquaman = new Contact { 
        Id = new Guid("972a720f-4ee9-49f2-a191-9d5373d4176b"),
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
        Id = new Guid("4ba9d38d-d1b4-40ae-acc1-54178b496fe4"),
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
        Id = new Guid("2db33354-73c4-43fe-af3f-c3abd9484e5a"),
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
      var black_widow = new Contact
      {
        Id = new Guid("0575c435-6c28-4724-a9c0-a7d6c80b8f3c"),
        FirstName = "Natasha",
        LastName = "Romanova",
        Email = "lethalandsingle@avengers.com",
        ImageUrl = "black_widow.jpg",
        PhoneNumber = "+18002836437",
        Address = new ContactAddress
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States",
          ZipCode = "10002"
        }
      };
      var captain_america = new Contact
      {
        Id = new Guid("92b417e5-33b1-4669-b8aa-a6ce95d0f123"),
        FirstName = "Steve",
        LastName = "Rogers",
        Email = "thecap@avengers.com",
        ImageUrl = "captain_america.jpg",
        PhoneNumber = "+18002836437",
        Address = new ContactAddress
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States",
          ZipCode = "10002"
        }
      };
      var captain_marvel = new Contact
      {
        Id = new Guid("b5c53c33-2dc0-4e73-bd8f-f0b0e422d868"),
        FirstName = "Carol",
        LastName = "Danvers",
        Email = "girlpower@avengers.com",
        ImageUrl = "captain_marvel.jpg",
        PhoneNumber = "+18002836437",
        Address = new ContactAddress
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States",
          ZipCode = "10002"
        }
      };
      var cyborg = new Contact
      {
        Id = new Guid("0ad8e0ff-d2a2-405f-9427-2b322b47d231"),
        FirstName = "Victor",
        LastName = "Stone",
        Email = "amarobot@motorcity.com",
        ImageUrl = "cyborg.jpg",        
        Address = new ContactAddress
        {
          City = "Detroit",                 
          State = "Michigan",
          Country = "United States"          
        }
      };
      var doctor_strange = new Contact
      {
        Id = new Guid("bea1e8d6-538c-47e0-b4eb-d3c59e619dac"),
        FirstName = "Stephen",
        LastName = "Strange",
        Email = "magic-cape@avengers.com",
        ImageUrl = "doctor_strange.jpg",
        PhoneNumber = "+18002836437",
        Address = new ContactAddress
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States",
          ZipCode = "10002"
        }
      };
      var falcon = new Contact
      {
        Id = new Guid("0206be6b-1948-4971-aa86-b3004258b767"),
        FirstName = "Samuel",
        LastName = "Wilson",
        Email = "mightywings@avengers.com",
        ImageUrl = "falcon.jpg",
        PhoneNumber = "+18002836437",
        Address = new ContactAddress
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States",
          ZipCode = "10002"
        }
      };
      var flash = new Contact
      {
        Id = new Guid("2bb1c4e7-e191-441c-810e-1b79239004a7"),
        FirstName = "Barry",
        LastName = "Allen",
        Email = "speedy@starlabs.com",
        ImageUrl = "flash.jpg",        
        Address = new ContactAddress
        {
          City = "Central City",
          Street1 = "One Star Labs Way",          
          State = "Missouri",
          Country = "United States"          
        }
      };
      var hawkeye = new Contact
      {
        Id = new Guid("88f3e003-bb73-4372-99c1-065e719c5d5e"),
        FirstName = "Clint",
        LastName = "Barton",
        Email = "brokenarrow@avengers.com",
        ImageUrl = "hawkeye.jpg",
        PhoneNumber = "+18002836437",
        Address = new ContactAddress
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States",
          ZipCode = "10002"
        }
      };
      var hulk = new Contact
      {
        Id = new Guid("0da7fa4b-c4a5-44cc-8cf9-8cd3a69f62da"),
        FirstName = "Bruce",
        LastName = "Banner",
        Email = "smartandgreen@avengers.com",
        ImageUrl = "hulk.jpg",
        PhoneNumber = "+18002836437",
        Address = new ContactAddress
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States",
          ZipCode = "10002"
        }
      };
      var ironman = new Contact
      {
        Id = new Guid("7323501c-3656-44f5-87a3-6bd61e3237de"),
        FirstName = "Tony",
        LastName = "Stark",
        Email = "tony@starkindustries.com",
        ImageUrl = "ironman.jpg",
        PhoneNumber = "+18002836437",
        Address = new ContactAddress
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States",
          ZipCode = "10002"
        }
      };
      var scarlet_witch = new Contact
      {
        Id = new Guid("3534340c-97a6-41d0-a8dc-193bde19cf07"),
        FirstName = "Wanda",
        LastName = "Maximoff",
        Email = "witchgirl@avengers.com",
        ImageUrl = "scarlet_witch.jpg",
        PhoneNumber = "+18002836437",
        Address = new ContactAddress
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States",
          ZipCode = "10002"
        }
      };
      var spiderman = new Contact
      {
        Id = new Guid("ada9f3c3-da5e-4247-8e42-440d9bb6652a"),
        FirstName = "Peter",
        LastName = "Parker",
        Email = "spidey@avengers.com",
        ImageUrl = "spiderman.jpg",
        PhoneNumber = "+18002836437",
        Address = new ContactAddress
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States",
          ZipCode = "10002"
        }
      };
      var superman = new Contact
      {
        Id = new Guid("e4ce995f-8521-4614-917e-4172fb4974c7"),
        FirstName = "Clark",
        LastName = "Kent",
        Email = "theman@kryptonlives.com",
        ImageUrl = "superman.jpg",        
        Address = new ContactAddress
        {
          City = "The North Pole"
        }
      };
      var thor = new Contact
      {
        Id = new Guid("a1a0cfd9-8f20-471e-86ce-e3c8e041d164"),
        FirstName = "Thor",
        LastName = "Odinson",
        Email = "hammertime@avengers.com",
        ImageUrl = "thor.jpg",
        PhoneNumber = "+18002836437",
        Address = new ContactAddress
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States",
          ZipCode = "10002"
        }
      };
      var wonder_woman = new Contact
      {
        Id = new Guid("75f0e985-386e-4588-8d06-a24b8bebc77b"),
        FirstName = "Diana",
        LastName = "Prince",
        Email = "princessDi@amazonsrule.com",
        ImageUrl = "wonder_woman.jpg",        
        Address = new ContactAddress
        {
          City = "Paradise Island"          
        }
      };

      context.Contacts.AddRange(aquaman, batman, black_panther, black_widow, 
        captain_america, captain_marvel, cyborg, doctor_strange, falcon, flash, 
        hawkeye, hulk, ironman, scarlet_witch, spiderman, superman, thor, wonder_woman);

      context.SaveChanges();      

    }
  }
}
