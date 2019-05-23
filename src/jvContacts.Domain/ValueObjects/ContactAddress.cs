using jvContacts.Domain.Infrastructure.ValueObject;
using System.Collections.Generic;
using System.Text;

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

    public string DisplayAddress
    {
      get
      {
        var length = 0;
        var a = new StringBuilder();
        if (!string.IsNullOrEmpty(Street1))
        {
          a.Append(Street1);
          length += Street1.Length;
        }
        if (!string.IsNullOrEmpty(Street2))
        {
          if(length > 0)
          {
            a.Append(", ");
          }
          a.Append(Street2);
          length += Street2.Length;
        }
        if (!string.IsNullOrEmpty(City))
        {
          if (length > 0)
          {
            a.Append(", ");
          }
          a.Append(City);
          length += City.Length;
        }
        if (!string.IsNullOrEmpty(State))
        {
          if (length > 0)
          {
            a.Append(", ");
          }
          a.Append(State);
          length += State.Length;
        }
        if (!string.IsNullOrEmpty(Country))
        {
          if (length > 0)
          {
            a.Append(", ");
          }
          a.Append(Country);
          length += Country.Length;
        }
        if (!string.IsNullOrEmpty(ZipCode))
        {
          if (length > 0 )
          {
            a.Append(" ");
          }
          a.Append(ZipCode);
        }

        return a.ToString();
      }
    }

    protected override IEnumerable<object> GetAtomicValues()
    {
      yield return Street1;
      yield return Street2;
      yield return City;
      yield return State;
      yield return Country;
      yield return ZipCode;
      yield return DisplayAddress;
    }

  }
}
