using AutoMapper;
using jvContacts.Application.Contacts.Queries;
using jvContacts.Application.Contacts.Queries.GetContactList;
using jvContacts.Application.Tests.Infrastructure;
using jvContacts.Persistence.Context;
using Shouldly;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace jvContacts.Application.Tests.Contacts
{
  [Collection("QueryCollection")]
  public class GetContactListQueryHandlerTests
  {
    private readonly ContactDbContext _context;
    private readonly IMapper _mapper;

    public GetContactListQueryHandlerTests(QueryTestFixture fixture)
    {
      _context = fixture.Context;
      _mapper = fixture.Mapper;
    }

    [Fact]
    public async Task GetContactsTest()
    {
      var sut = new GetContactListQueryHandler(_context, _mapper);

      var result = await sut.Handle(new GetContactListQuery(), CancellationToken.None);

      result.ShouldBeOfType<ContactListViewModel>();

      result.Contacts.Count.ShouldBe(3);
    }
  }
}