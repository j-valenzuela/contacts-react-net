using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using jvContacts.Api.Functional.Tests.Common;
using jvContacts.Web.React;
using Xunit;

namespace jvContacts.Api.Functional.Tests.Controllers.Contacts
{
  public class Delete : IClassFixture<CustomWebApplicationFactory<Startup>>
  {
    private readonly HttpClient _client;

    public Delete(CustomWebApplicationFactory<Startup> factory)
    {
      _client = factory.CreateClient();
    }

    [Fact]
    public async Task GivenId_ReturnsSuccessStatusCode()
    {
      // Delete Batman
      var validId = new System.Guid("4ba9d38d-d1b4-40ae-acc1-54178b496fe4");

      var response = await _client.DeleteAsync($"/api/contacts/delete/{validId}");

      Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
      //response.EnsureSuccessStatusCode();
    }

    [Fact]
    public async Task GivenInvalidId_ReturnsNotFoundStatusCode()
    {
      var invalidId = new System.Guid("8e7c209e-48b9-4aca-84d5-196b4a527098");

      var response = await _client.DeleteAsync($"/api/contacts/delete/{invalidId}");

      Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }
  }
}
