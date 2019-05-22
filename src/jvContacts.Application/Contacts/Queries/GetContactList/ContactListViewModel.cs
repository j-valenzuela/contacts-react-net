using jvContacts.Application.Contacts.Queries.GetContactList;
using System.Collections.Generic;

namespace jvContacts.Application.Contacts.Queries
{
  public class ContactListViewModel
  {
    public IList<ContactLookupModel> Contacts { get; set; }
  }
}
