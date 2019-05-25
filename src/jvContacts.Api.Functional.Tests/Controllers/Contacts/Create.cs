using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using jvContacts.Api.Functional.Tests.Common;
using jvContacts.Application.Contacts.Commands.CreateContact;
using jvContacts.Web.React;
using Xunit;

namespace jvContacts.Api.Functional.Tests.Controllers.Contacts
{
  public class Create : IClassFixture<CustomWebApplicationFactory<Startup>>
  {
    private readonly HttpClient _client;

    public Create(CustomWebApplicationFactory<Startup> factory)
    {
      _client = factory.CreateClient();
    }

    [Fact]
    public async Task GivenCreateContactCommand_ReturnsSuccessStatusCode()
    {
      var command = new CreateContactCommand
      {       
        FirstName = "Juan",
        LastName = "Valenzuela",
        Email = "abc@def.com",
        ImageUrl = "juan.jpg",
        PhoneNumber="+11234567890",       
        Street1="1234 E Main St",
        Street2="",
        City = "Mesa",
        State = "Arizona",
        Country = "United States",
        ZipCode = "12345"              
      };

      var content = Utilities.GetRequestContent(command);

      var response = await _client.PostAsync($"/api/contacts/create", content);

      Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
    }
  }
}
