using MediatR;
using System;

namespace jvContacts.Application.Contacts.Commands.DeleteContact
{
  public class DeleteContactCommand : IRequest
  {
    public Guid Id { get; set; }
  }
}
