using System.Threading;
using System.Threading.Tasks;
using MediatR;
using jvContacts.Application.Exceptions;
using jvContacts.Application.Interfaces;
using jvContacts.Domain.Entities;

namespace jvContacts.Application.Contacts.Queries.GetContactDetail
{
  public class GetContactDetailQueryHandler : IRequestHandler<GetContactDetailQuery, ContactDetailModel>
  {
    private readonly IContactDbContext _context;

    public GetContactDetailQueryHandler(IContactDbContext context)
    {
      _context = context;
    }

    public async Task<ContactDetailModel> Handle(GetContactDetailQuery request, CancellationToken cancellationToken)
    {
      var entity = await _context.Contacts
          .FindAsync(request.Id);

      if (entity == null)
      {
        throw new NotFoundException(nameof(Contact), request.Id);
      }

      return ContactDetailModel.Create(entity);
    }
  }
}
