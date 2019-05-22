using System.Threading;
using System.Threading.Tasks;
using MediatR;
using jvContacts.Application.Interfaces;
using jvContacts.Domain.Entities;
using System;
using jvContacts.Domain.ValueObjects;

namespace jvContacts.Application.Contacts.Commands.CreateContact
{
  public class CreateContactCommand : IRequest
  {
    public Guid Id { get; set; }

    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public ContactAddress Address { get; set; }
    public string ImageUrl { get; set; }

    public class Handler : IRequestHandler<CreateContactCommand, Unit>
    {
      private readonly IContactDbContext _context;
      private readonly IMediator _mediator;

      public Handler(IContactDbContext context, IMediator mediator)
      {
        _context = context;
        _mediator = mediator;
      }

      public async Task<Unit> Handle(CreateContactCommand request, CancellationToken cancellationToken)
      {
        var entity = new Contact
        {
          Id = request.Id,
          FirstName = request.FirstName,
          LastName = request.LastName,
          Email = request.Email,
          Address = request.Address,
          PhoneNumber = request.PhoneNumber,
          ImageUrl = request.ImageUrl          
        };

        _context.Contacts.Add(entity);

        await _context.SaveChangesAsync(cancellationToken);

        await _mediator.Publish(new ContactCreated { Id = entity.Id }, cancellationToken);

        return Unit.Value;
      }
    }
  }
}
