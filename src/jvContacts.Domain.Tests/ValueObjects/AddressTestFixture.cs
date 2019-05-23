using System;
using jvContacts.Domain.Entities;

namespace jvContacts.Domain.Tests.ValueObjects
{
  public class AddressTestFixture : IDisposable
  {
    public Contact Contact { get; set; }

    public AddressTestFixture()
    {
      Contact = new Contact
      {
        Id = Guid.NewGuid(),
        FirstName = "Steve",
        LastName = "Rogers"        
      };
    }

    public void Dispose()
    {
    
    }
  }
}
