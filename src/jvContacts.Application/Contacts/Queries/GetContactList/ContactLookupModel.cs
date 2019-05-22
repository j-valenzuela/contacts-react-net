using AutoMapper;
using jvContacts.Application.Interfaces.Mapping;
using jvContacts.Domain.Entities;
using System;

namespace jvContacts.Application.Contacts.Queries.GetContactList
{
  public class ContactLookupModel : IHaveCustomMapping
  {
    public Guid Id { get; set; }
    public string Email { get; set; }

    public void CreateMappings(Profile configuration)
    {
      configuration.CreateMap<Contact, ContactLookupModel>()
          .ForMember(cDTO => cDTO.Id, opt => opt.MapFrom(c => c.Id))
          .ForMember(cDTO => cDTO.Email, opt => opt.MapFrom(c => c.Email));
    }
  }
}
