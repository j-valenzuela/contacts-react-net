using jvContacts.Domain.Infrastructure.ValueObject;
using System.Collections.Generic;

namespace jvContacts.Domain.ValueObjects
{
  public class ContactAddress : ValueObject
  {
    public ContactAddress() { }

    public ContactAddress(string street1, string street2, string city, string state, string country, string zipCode)
    {
      Street1 = street1;
      Street2 = street2;
      City = city;
      State = state;
      Country = country;
      ZipCode = zipCode;
    }
   
    public string Street1 { get; set; }

    public string Street2 { get; set; }

    public string City { get; set; }

    public string State { get; set; }

    public string Country { get; set; }

    public string ZipCode { get; set; }

    protected override IEnumerable<object> GetAtomicValues()
    {
      yield return Street1;
      yield return Street2;
      yield return City;
      yield return State;
      yield return Country;
      yield return ZipCode;
    }

  }
}
