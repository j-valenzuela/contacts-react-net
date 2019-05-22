using System.Threading;
using System.Threading.Tasks;
using MediatR;
using jvContacts.Application.Exceptions;
using jvContacts.Application.Interfaces;
using jvContacts.Domain.Entities;

namespace jvContacts.Application.Contacts.Commands.DeleteContact
{
  public class DeleteContactCommandHandler : IRequestHandler<DeleteContactCommand>
  {
    private readonly IContactDbContext _context;

    public DeleteContactCommandHandler(IContactDbContext context)
    {
      _context = context;
    }

    public async Task<Unit> Handle(DeleteContactCommand request, CancellationToken cancellationToken)
    {
      var entity = await _context.Contacts
          .FindAsync(request.Id);

      if (entity == null)
      {
        throw new NotFoundException(nameof(Contact), request.Id);
      }

      // This is a SOFT delete, where the record is not physically deleted from the database
      // but instead a flag called IsDeleted is set to true. This flag will be captured
      // by a global query and it will automatically filter out records that have it. If you want
      // to perform a hard delete instead uncomment the following line after the HARD DELETE comment.

      // SOFT DELETE
      entity.IsDeleted = true;

      // HARD DELETE
      //_context.Contacts.Remove(entity);

      await _context.SaveChangesAsync(cancellationToken);

      return Unit.Value;
    }
  }
}
