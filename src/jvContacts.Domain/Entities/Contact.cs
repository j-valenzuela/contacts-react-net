using jvContacts.Domain.Interfaces;
using jvContacts.Domain.ValueObjects;
using System;

namespace jvContacts.Domain.Entities
{
  public class Contact : Entity, IAuditable, ISoftDelete
  {
    public Contact(Guid id, string firstName, string lastName, string email, string phoneNumber, ContactAddress address, string imageUrl)
    {
      Id = id;
      FirstName = firstName;
      LastName = lastName;
      Email = email;
      PhoneNumber = phoneNumber;
      Address = address;
      ImageUrl = imageUrl;
    }

    // Empty constructor for EF
    public Contact() { }

    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public ContactAddress Address { get; set; }
    public string ImageUrl { get; set; }

  }
}
