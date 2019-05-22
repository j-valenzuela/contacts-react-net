using FluentValidation;

namespace jvContacts.Application.Contacts.Commands.UpdateContact
{
  public class UpdateCustomerCommandValidator : AbstractValidator<UpdateContactCommand>
  {
    public UpdateCustomerCommandValidator()
    {
      RuleFor(x => x.FirstName).MaximumLength(80).NotEmpty();
      RuleFor(x => x.LastName).MaximumLength(80).NotEmpty();
      RuleFor(x => x.Email).MaximumLength(255).NotEmpty().EmailAddress();
    }
  }
}
