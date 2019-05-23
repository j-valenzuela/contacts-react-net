using System.Net.Http;
using System.Threading.Tasks;
using jvContacts.Api.Functional.Tests.Common;
using jvContacts.Application.Contacts.Queries;
using jvContacts.Web.React;
using Xunit;

namespace jvContacts.Api.Functional.Tests.Controllers.Contacts
{
  public class GetAll : IClassFixture<CustomWebApplicationFactory<Startup>>
  {
    private readonly HttpClient _client;

    public GetAll(CustomWebApplicationFactory<Startup> factory)
    {
      _client = factory.CreateClient();
    }

    [Fact]
    public async Task ReturnsContactListViewModel()
    {
      var response = await _client.GetAsync("/api/contacts/getall");

      response.EnsureSuccessStatusCode();

      var vm = await Utilities.GetResponseContent<ContactListViewModel>(response);

      Assert.IsType<ContactListViewModel>(vm);
      Assert.NotEmpty(vm.Contacts);
    }
  }
}
