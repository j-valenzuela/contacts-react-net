using jvContacts.Domain.Entities;
using System;

namespace jvContacts.Persistence.Context
{
  public class ContactsDataSeeder
  {
    private ContactsDbContext context;
    public ContactsDataSeeder(ContactsDbContext context)
    {
      this.context = context;
    }

    public void Seed()
    {
      var aquaman = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Arthur",
        LastName = "Curry",
        Email = "waterboy@atlantis.com",
        ImageUrl = "aquaman.jpg",
        Address =
        {
          City = "Atlantis City",
          Street1 = "One Atlantis Way"               
        }
      };
      var batman = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Bruce",
        LastName = "Wayne",
        Email = "dark.knight@batcave.com",
        ImageUrl = "batman.jpg",
        Address =
        {
          City = "Gotham City",
          Street1 = "The Batcave"
        }
      };
      var black_panther = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "King",
        LastName = "T'Challa",
        Email = "blackcat@wakandaforever.com",
        ImageUrl = "black_panther.jpg",
        Address =
        {
          City = "Central Wakanda",
          Street1 = "The Royal Palace of Wakanda"
        }
      };
      var black_widow = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Natasha",
        LastName = "Romanova",
        Email = "lethalandsingle@avengers.com",
        ImageUrl = "black_widow.jpg",
        PhoneNumber = "+18002836437",
        Address =
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States of America",
          ZipCode = "10002"
        }
      };
      var captain_america = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Steve",
        LastName = "Rogers",
        Email = "thecap@avengers.com",
        ImageUrl = "captain_america.jpg",
        PhoneNumber = "+18002836437",
        Address =
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States of America",
          ZipCode = "10002"
        }
      };
      var captain_marvel = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Carol",
        LastName = "Danvers",
        Email = "girlpower@avengers.com",
        ImageUrl = "captain_marvel.jpg",
        PhoneNumber = "+18002836437",
        Address =
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States of America",
          ZipCode = "10002"
        }
      };
      var cyborg = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Victor",
        LastName = "Stone",
        Email = "amarobot@motorcity.com",
        ImageUrl = "cyborg.jpg",        
        Address =
        {
          City = "Detroit",                 
          State = "Michigan",
          Country = "United States of America"          
        }
      };
      var doctor_strange = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Stephen",
        LastName = "Strange",
        Email = "magic-cape@avengers.com",
        ImageUrl = "doctor_strange.jpg",
        PhoneNumber = "+18002836437",
        Address =
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States of America",
          ZipCode = "10002"
        }
      };
      var falcon = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Samuel",
        LastName = "Wilson",
        Email = "mightywings@avengers.com",
        ImageUrl = "falcon.jpg",
        PhoneNumber = "+18002836437",
        Address =
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States of America",
          ZipCode = "10002"
        }
      };
      var flash = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Barry",
        LastName = "Allen",
        Email = "speedy@starlabs.com",
        ImageUrl = "flash.jpg",        
        Address =
        {
          City = "Central City",
          Street1 = "One Star Labs Way",          
          State = "Missouri",
          Country = "United States of America"          
        }
      };
      var hawkeye = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Clint",
        LastName = "Barton",
        Email = "brokenarrow@avengers.com",
        ImageUrl = "hawkeye.jpg",
        PhoneNumber = "+18002836437",
        Address =
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States of America",
          ZipCode = "10002"
        }
      };
      var hulk = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Bruce",
        LastName = "Banner",
        Email = "smartandgreen@avengers.com",
        ImageUrl = "hulk.jpg",
        PhoneNumber = "+18002836437",
        Address =
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States of America",
          ZipCode = "10002"
        }
      };
      var ironman = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Tony",
        LastName = "Stark",
        Email = "tony@starkindustries.com",
        ImageUrl = "ironman.jpg",
        PhoneNumber = "+18002836437",
        Address =
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States of America",
          ZipCode = "10002"
        }
      };
      var scarlet_witch = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Wanda",
        LastName = "Maximoff",
        Email = "witchgirl@avengers.com",
        ImageUrl = "scarlet_witch.jpg",
        PhoneNumber = "+18002836437",
        Address =
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States of America",
          ZipCode = "10002"
        }
      };
      var spiderman = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Peter",
        LastName = "Parker",
        Email = "spidey@avengers.com",
        ImageUrl = "spiderman.jpg",
        PhoneNumber = "+18002836437",
        Address =
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States of America",
          ZipCode = "10002"
        }
      };
      var superman = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Clark",
        LastName = "Kent",
        Email = "theman@kryptonlives.com",
        ImageUrl = "superman.jpg",        
        Address =
        {
          City = "The North Pole"
        }
      };
      var thor = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Thor",
        LastName = "Odinson",
        Email = "hammertime@avengers.com",
        ImageUrl = "thor.jpg",
        PhoneNumber = "+18002836437",
        Address =
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States of America",
          ZipCode = "10002"
        }
      };
      var wonder_woman = new Contact()
      {
        Id = Guid.NewGuid(),
        FirstName = "Diana",
        LastName = "Prince",
        Email = "princessDi@amazonsrule.com",
        ImageUrl = "wonder_woman.jpg",        
        Address =
        {
          City = "Paradise Island"          
        }
      };

      context.Contacts.AddRange(aquaman, batman, black_panther, black_widow, 
        captain_america, captain_marvel, cyborg, doctor_strange, falcon, flash, 
        hawkeye, hulk, ironman, scarlet_witch, spiderman, superman, thor, wonder_woman);

      context.SaveChanges();
      context.Dispose();

    }
  }
}
