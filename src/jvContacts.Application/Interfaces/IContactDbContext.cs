using jvContacts.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace jvContacts.Application.Interfaces
{
  public interface IContactDbContext
  {

    DbSet<Contact> Contacts { get; set; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
  }
}
