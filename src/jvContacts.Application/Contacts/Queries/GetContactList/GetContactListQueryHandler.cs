using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using jvContacts.Application.Interfaces;
using System.Threading;
using System.Threading.Tasks;

namespace jvContacts.Application.Contacts.Queries.GetContactList
{
  public class GetContactListQueryHandler : IRequestHandler<GetContactListQuery, ContactListViewModel>
  {
    private readonly IContactDbContext _context;
    private readonly IMapper _mapper;

    public GetContactListQueryHandler(IContactDbContext context, IMapper mapper)
    {
      _context = context;
      _mapper = mapper;
    }

    public async Task<ContactListViewModel> Handle(GetContactListQuery request, CancellationToken cancellationToken)
    {
      return new ContactListViewModel
      {
        Contacts = await _context.Contacts.ProjectTo<ContactLookupModel>(_mapper.ConfigurationProvider).ToListAsync(cancellationToken)
      };
    }
  }
}
