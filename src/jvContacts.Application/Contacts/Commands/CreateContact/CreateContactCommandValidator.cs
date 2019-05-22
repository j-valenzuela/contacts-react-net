using FluentValidation;

namespace jvContacts.Application.Contacts.Commands.CreateContact
{
  public class CreateCustomerCommandValidator : AbstractValidator<CreateContactCommand>
  {
    public CreateCustomerCommandValidator()
    {
      RuleFor(x => x.FirstName).MaximumLength(80).NotEmpty();
      RuleFor(x => x.LastName).MaximumLength(80).NotEmpty();
      RuleFor(x => x.Email).MaximumLength(500).NotEmpty().EmailAddress();
      RuleFor(x => x.PhoneNumber).MaximumLength(20);
      RuleFor(x => x.Address.Street1).MaximumLength(80);
      RuleFor(x => x.Address.Street2).MaximumLength(80);
      RuleFor(x => x.Address.City).MaximumLength(80);
      RuleFor(x => x.Address.State).MaximumLength(80);
      RuleFor(x => x.Address.Country).MaximumLength(80);
      RuleFor(x => x.Address.ZipCode).MaximumLength(10);
      RuleFor(x => x.ImageUrl).MaximumLength(500);
    }
  }
}
