using jvContacts.Application.Notifications;
using System.Threading.Tasks;

namespace jvContacts.Application.Interfaces
{
  public interface INotificationService
  {
    Task SendAsync(Message message);
  }
}
