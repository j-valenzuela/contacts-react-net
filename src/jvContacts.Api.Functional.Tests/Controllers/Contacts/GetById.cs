using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using jvContacts.Api.Functional.Tests.Common;
using jvContacts.Application.Contacts.Queries.GetContactDetail;
using jvContacts.Web.React;
using Xunit;
using Shouldly;

namespace jvContacts.Api.Functional.Tests.Controllers.Contacts
{
  public class GetById : IClassFixture<CustomWebApplicationFactory<Startup>>
  {
    private readonly HttpClient _client;

    public GetById(CustomWebApplicationFactory<Startup> factory)
    {
      _client = factory.CreateClient();
    }

    [Fact]
    public async Task GivenId_ReturnsContactViewModel()
    {
      // Retrieve Aquaman
      var id = new System.Guid("972a720f-4ee9-49f2-a191-9d5373d4176b");

      var response = await _client.GetAsync($"/api/contacts/get/{id}");

      response.EnsureSuccessStatusCode();

      var contact = await Utilities.GetResponseContent<ContactDetailModel>(response);

      contact.FirstName.ShouldBe("Arthur");
      //Assert.Equal(id, contact.Id);
    }

    [Fact]
    public async Task GivenInvalidId_ReturnsNotFoundStatusCode()
    {
      var invalidId = new System.Guid("8e7c209e-48b9-4aca-84d5-196b4a527098");

      var response = await _client.GetAsync($"/api/contacts/get/{invalidId}");

      Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }
  }
}
