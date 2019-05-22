using System;
using System.Linq.Expressions;
using jvContacts.Domain.Entities;
using jvContacts.Domain.ValueObjects;

namespace jvContacts.Application.Contacts.Queries.GetContactDetail
{
  public class ContactDetailModel
  {
    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public ContactAddress Address { get; set; }
    public string ImageUrl { get; set; }

    public static Expression<Func<Contact, ContactDetailModel>> Projection
    {
      get
      {
        return contact => new ContactDetailModel
        {
          Id = contact.Id,
          FirstName = contact.FirstName,
          LastName = contact.LastName,
          Email = contact.Email,
          PhoneNumber = contact.PhoneNumber,
          Address = contact.Address,
          ImageUrl = contact.ImageUrl         
        };
      }
    }

    public static ContactDetailModel Create(Contact contact)
    {
      return Projection.Compile().Invoke(contact);
    }
  }
}
