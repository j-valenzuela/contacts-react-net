using AutoMapper;
using jvContacts.Application.Interfaces.Mapping;
using jvContacts.Domain.Entities;
using jvContacts.Domain.ValueObjects;
using System;

namespace jvContacts.Application.Contacts.Queries.GetContactList
{
  public class ContactLookupModel : IHaveCustomMapping
  {
    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public ContactAddress Address { get; set; }
    public string ImageUrl { get; set; }

    public void CreateMappings(Profile configuration)
    {
      configuration.CreateMap<Contact, ContactLookupModel>()
          .ForMember(cDTO => cDTO.Id, opt => opt.MapFrom(c => c.Id))
          .ForMember(cDTO => cDTO.FirstName, opt => opt.MapFrom(c => c.FirstName))
          .ForMember(cDTO => cDTO.LastName, opt => opt.MapFrom(c => c.LastName))
          .ForMember(cDTO => cDTO.Email, opt => opt.MapFrom(c => c.Email))
          .ForMember(cDTO => cDTO.PhoneNumber, opt => opt.MapFrom(c => c.PhoneNumber))
          .ForMember(cDTO => cDTO.Address, opt => opt.MapFrom(c => c.Address))
          .ForMember(cDTO => cDTO.ImageUrl, opt => opt.MapFrom(c => c.ImageUrl));
    }
  }
}
