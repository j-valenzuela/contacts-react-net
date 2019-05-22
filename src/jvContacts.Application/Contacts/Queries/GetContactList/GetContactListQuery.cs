using MediatR;

namespace jvContacts.Application.Contacts.Queries.GetContactList
{
  public class GetContactListQuery : IRequest<ContactListViewModel>
  {
  }
}
