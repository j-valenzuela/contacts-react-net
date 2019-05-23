# contacts-react-net (jvContacts)
Yep, "yet another" contact management React application, but this one shows how to 
implement functional components with React hooks for state management instead of Redux, because Redux + class based components
are so 2018! Additionally, it leverages the latest features in .NET Core 2.2 on the backend. 

While the application use case is very simple, the intention is to 
demonstrate how different architecture patterns and design principles can be integrated 
to support scalability. 

**This is a proof of concept for how an enterprise application could be built
using these technologies. It is not a production-ready application. It uses third party tools that are still in beta**


## Architecture
* Clean Architecture
* Domain Driven Design (DDD)
* Command Query Responsibility Segregation (CQRS)
* Test Driven Development (TDD)
* Single Page Application with functional components using React hooks for state management

### Backend Stack
* ASP.NET Core 2.2 (WebAPI)
* Entity Framework Core 2.2  
* SQL Server 2017 Express (LocalDb) 
* MediatR (mediator pattern implementation)
* ASP.NET Core Native Dependency Injection
* xUnit for unit tests
* Fluent Validator
* Shouldly
 
### Frontend Stack
* React 16.8 using hooks for state management
* Material UI 4.0.0 beta which supports React hooks for implementing Google's Material Design principles
* Material Table 
* Final Form for validation and form state management
* Autosuggest for auto-complete style fields
* React phone number input and google libphone validation
* Axios for XMLHttpRequests instead of native browser's Fetch
* React Toastify

## Roadmap
- [x] This version (1.0.0)
    - [x] Contact CRUD with ASP.NET Core API (REST)
    - [x] Entity Framework 2.2 features:
      - [x] Migrations 
      - [x] Shadow Properties and value objects for cleaner POCO's
      - [x] Global Query Filters to implement soft delete. Could also be used to support multi-tenancy.
      - [x] In-Memory driver for unit testing
    - [x] React client         
    - [x] DDD (Domain Driven Design) with clean architecture         
    - [x] CQRS
    - [x] Dependency Inversion (deafult ASP.NET Core IoC container)
    - [x] Automatic database creation
    - [x] Seed database data
    - [x] EF Migrations
    - [x] Backend Unit Tests with xUnit
    - [x] Integration Tests    
    - [x] **KNOWN ISSUES:** 
      - [x] The Country and State fields in the edit contact form do not trigger the pristine flag due to a bug in react-final-form when used with react-autosuggest: https://github.com/final-form/react-final-form/issues/315
      - [x] Image upload is not enabled, so contact profile picture cannot be updated at this moment
- [ ] Future versions 
    - [ ] Client side testing using Jest and Enzyme (coming soon) 
    - [ ] Fix known issues. Replace react-final-form with Formik
    - [ ] Authentication with user management
    - [ ] Live Demo and CI
    - [ ] Support for multiple addresses and phone numbers per contact
    - [ ] Multi-language support (intl)
    - [ ] Health checks
    - [ ] GraphQL API service
    - [ ] Event Sourcing using Marten with PostgreSQL
    - [ ] Messaging with RabbitMQ or Kafka
    - [ ] Multi-tenancy support
    - [ ] Separate API service and UI into separate projects
    - [ ] Create more client versions:
      - [ ] Angular client
      - [ ] Vue.js client
    - [ ] Docker support
    - [ ] Convert to .NET Core 3.0
      - [ ] Add column encryption (Always Encrypted)
      - [ ] Create Blazor version of the UI
    