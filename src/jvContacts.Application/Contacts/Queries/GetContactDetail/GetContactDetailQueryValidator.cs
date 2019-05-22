using FluentValidation;

namespace jvContacts.Application.Contacts.Queries.GetContactDetail
{
  public class GetContactDetailQueryValidator : AbstractValidator<GetContactDetailQuery>
  {
    public GetContactDetailQueryValidator()
    {
      RuleFor(v => v.Id).NotEmpty();
    }
  }
}
