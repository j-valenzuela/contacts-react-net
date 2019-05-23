using jvContacts.Domain.Entities;
using jvContacts.Domain.ValueObjects;
using System;
using Xunit;
using Shouldly;

namespace jvContacts.Domain.Tests.ValueObjects
{
  public class AddressTests : IClassFixture<AddressTestFixture>
  {
    private readonly AddressTestFixture _addressFixture;

    public AddressTests(AddressTestFixture addressFixture)
    {
      _addressFixture = addressFixture;
    }

    [Fact]
    public void AddressValueObjectIsAssignableToContact()
    {
      var address = new ContactAddress
      {
        City = "New York",
        Street1 = "890 Fifth Avenue",
        Street2 = "Borough of Manhattan",
        State = "New York",
        Country = "United States",
        ZipCode = "10002"
      };

      _addressFixture.Contact.Address = address;

      _addressFixture.Contact.Address.City.ShouldBe("New York");

    }

  }
}
