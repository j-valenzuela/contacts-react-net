using MediatR;
using System;

namespace jvContacts.Application.Contacts.Queries.GetContactDetail
{
  public class GetContactDetailQuery : IRequest<ContactDetailModel>
  {
    public Guid Id { get; set; }
  }
}
