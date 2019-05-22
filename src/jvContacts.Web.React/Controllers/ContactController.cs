using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using jvContacts.Application.Contacts.Commands.CreateContact;
using jvContacts.Application.Contacts.Commands.DeleteContact;
using jvContacts.Application.Contacts.Commands.UpdateContact;
using jvContacts.Application.Contacts.Queries.GetContactDetail;
using jvContacts.Application.Contacts.Queries.GetContactList;
using System.Threading.Tasks;
using jvContacts.Application.Contacts.Queries;
using System;

namespace jvContacts.Web.React.Controllers
{
  public class ContactsController : BaseController
  {
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<ContactListViewModel>> GetAll()
    {
      return Ok(await Mediator.Send(new GetContactListQuery()));
    }

    [HttpGet("{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<ContactDetailModel>> Get(Guid id)
    {
      return Ok(await Mediator.Send(new GetContactDetailQuery { Id = id }));
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesDefaultResponseType]
    public async Task<IActionResult> Create([FromBody]CreateContactCommand command)
    {
      await Mediator.Send(command);

      return NoContent();
    }

    [HttpPut("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Update([FromBody]UpdateContactCommand command)
    {
      await Mediator.Send(command);

      return NoContent();
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(Guid id)
    {
      await Mediator.Send(new DeleteContactCommand { Id = id });

      return NoContent();
    }
  }
}