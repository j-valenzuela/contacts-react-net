using FluentValidation;

namespace jvContacts.Application.Contacts.Commands.CreateContact
{
  public class CreateCustomerCommandValidator : AbstractValidator<CreateContactCommand>
  {
    public CreateCustomerCommandValidator()
    {
      RuleFor(x => x.FirstName).MaximumLength(80).NotEmpty();
      RuleFor(x => x.LastName).MaximumLength(80).NotEmpty();
      RuleFor(x => x.Email).MaximumLength(255).NotEmpty().EmailAddress();
    }
  }
}
