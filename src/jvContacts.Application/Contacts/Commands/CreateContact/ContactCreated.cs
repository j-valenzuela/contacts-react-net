using MediatR;
using jvContacts.Application.Interfaces;
using jvContacts.Application.Notifications;
using System.Threading;
using System.Threading.Tasks;
using System;

namespace jvContacts.Application.Contacts.Commands.CreateContact
{
  public class ContactCreated : INotification
  {
    public Guid Id { get; set; }

    public class ContactCreatedHandler : INotificationHandler<ContactCreated>
    {
      private readonly INotificationService _notification;

      public ContactCreatedHandler(INotificationService notification)
      {
        _notification = notification;
      }

      public async Task Handle(ContactCreated notification, CancellationToken cancellationToken)
      {
        await _notification.SendAsync(new Message());
      }
    }
  }
}
