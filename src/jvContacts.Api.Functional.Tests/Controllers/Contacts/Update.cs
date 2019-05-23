using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using jvContacts.Api.Functional.Tests.Common;
using jvContacts.Application.Contacts.Commands.UpdateContact;
using jvContacts.Domain.ValueObjects;
using jvContacts.Web.React;
using Xunit;

namespace jvContacts.Api.Functional.Tests.Controllers.Contacts
{
  public class Update : IClassFixture<CustomWebApplicationFactory<Startup>>
  {
    private readonly HttpClient _client;

    public Update(CustomWebApplicationFactory<Startup> factory)
    {
      _client = factory.CreateClient();
    }

    [Fact]
    public async Task GivenUpdateContactCommand_ReturnsSuccessStatusCode()
    {
      // Update Ironman
      var command = new UpdateContactCommand
      {
        Id = new Guid("7323501c-3656-44f5-87a3-6bd61e3237de"),
        FirstName = "Tony",
        LastName = "Stark",
        Email = "tony@starkindustries.com",
        ImageUrl = "ironman.jpg",
        PhoneNumber = "+18002836437",
        Address = new ContactAddress
        {
          City = "New York",
          Street1 = "890 Fifth Avenue",
          Street2 = "Borough of Manhattan",
          State = "New York",
          Country = "United States",
          ZipCode = "10002"
        }
      };

      var content = Utilities.GetRequestContent(command);

      var response = await _client.PutAsync($"/api/contacts/update/{command.Id}", content);

      Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
      //response.EnsureSuccessStatusCode();
    }

    [Fact]
    public async Task GivenUpdateContactCommandWithInvalidId_ReturnsNotFoundStatusCode()
    {
      var invalidCommand = new UpdateContactCommand
      {
        Id = new System.Guid("8e7c209e-48b9-4aca-84d5-196b4a527098"),
        FirstName = "Juan",
        LastName = "Valenzuela",
        Email = "abc@def.com",
        ImageUrl = "juan.jpg",
        PhoneNumber = "+11234567890",
        Address = new Domain.ValueObjects.ContactAddress
        {
          Street1 = "1234 E Main St",
          Street2 = "",
          City = "Scottsdale",
          State = "Arizona",
          Country = "United States",
          ZipCode = "12345"
        }
      };

      var content = Utilities.GetRequestContent(invalidCommand);

      var response = await _client.PutAsync($"/api/contacts/update/{invalidCommand.Id}", content);

      Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }
  }
}
