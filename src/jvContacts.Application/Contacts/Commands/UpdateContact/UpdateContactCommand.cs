using MediatR;
using Microsoft.EntityFrameworkCore;
using jvContacts.Application.Exceptions;
using jvContacts.Application.Interfaces;
using jvContacts.Domain.Entities;
using System.Threading;
using System.Threading.Tasks;
using System;
using jvContacts.Domain.ValueObjects;

namespace jvContacts.Application.Contacts.Commands.UpdateContact
{
  public class UpdateContactCommand : IRequest
  {
    public string Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public ContactAddress Address { get; set; }
    public string ImageUrl { get; set; }

    public class Handler : IRequestHandler<UpdateContactCommand, Unit>
    {
      private readonly IContactDbContext _context;

      public Handler(IContactDbContext context)
      {
        _context = context;
      }

      public async Task<Unit> Handle(UpdateContactCommand request, CancellationToken cancellationToken)
      {
        var entity = await _context.Contacts
            .SingleOrDefaultAsync(c => c.Id ==  new Guid(request.Id), cancellationToken);

        if (entity == null)
        {
          throw new NotFoundException(nameof(Contact), request.Id);
        }

        entity.Id = new Guid(request.Id);
        entity.FirstName = request.FirstName;
        entity.LastName = request.LastName;
        entity.Email = request.Email;
        entity.Address = request.Address;
        entity.PhoneNumber = request.PhoneNumber;
        entity.ImageUrl = request.ImageUrl;

        await _context.SaveChangesAsync(cancellationToken);

        return Unit.Value;
      }
    }
  }
}
