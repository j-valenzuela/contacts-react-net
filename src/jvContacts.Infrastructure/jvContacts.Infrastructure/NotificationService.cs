using jvContacts.Application.Interfaces;
using jvContacts.Application.Notifications;
using System.Threading.Tasks;

namespace jvContacts.Infrastructure
{
  public class NotificationService : INotificationService
  {
    public Task SendAsync(Message message)
    {
      return Task.CompletedTask;
    }
  }
}