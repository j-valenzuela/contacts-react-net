using FluentValidation;

namespace jvContacts.Application.Contacts.Commands.DeleteContact
{
  public class DeleteContactCommandValidator : AbstractValidator<DeleteContactCommand>
  {
    public DeleteContactCommandValidator()
    {
      RuleFor(v => v.Id).NotEmpty();
    }
  }
}
