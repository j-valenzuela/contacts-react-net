using jvContacts.Application.Contacts.Queries.GetContactDetail;
using jvContacts.Application.Tests.Infrastructure;
using jvContacts.Persistence.Context;
using Shouldly;
using System;
using System.Threading;
using System.Threading.Tasks;
using Xunit;

namespace jvContacts.Application.Tests.Contacts
{
  [Collection("QueryCollection")]
  public class GetContactDetailQueryHandlerTests
  {
    private readonly ContactDbContext _context;

    public GetContactDetailQueryHandlerTests(QueryTestFixture fixture)
    {
      _context = fixture.Context;
    }

    [Fact]
    public async Task GetContactDetail()
    {
      var sut = new GetContactDetailQueryHandler(_context);

      var result = await sut.Handle(new GetContactDetailQuery { Id = new Guid("d424facc-c58b-4cd5-bcc0-1550662fd8ef") }, CancellationToken.None);

      result.ShouldBeOfType<ContactDetailModel>();
      result.FirstName.ShouldBe("Bruce");

      // Did value object populate correctly?
      result.Address.City.ShouldContain("Gotham");
    }
  }
}
