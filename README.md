# contacts-react-net (jvContacts)
Yep, "yet another" contact management React application, but this one shows how to 
implement React hooks for state management instead of Redux, while leveraging the 
latest features in .NET Core 2.2 on the backend. 

While the application use case is very simple, the intention is to 
demonstrate how different architecture patterns and design principles can be integrated 
to support scalability.

This demo was created with Visual Studio 2019 (Community), but it can also be used with 
Visual Studio Code.     

## Architecture
* Clean Architecture and Clean Code
* Domain Driven Design (DDD)
* Domain Events
* Command Query Responsibility Segregation (CQRS)
* Event Sourcing (ES)
* Test Driven Development (TDD)
* Functional components using React hooks for state management. Redux + class based components
are so 2018!

### Backend Stack
* ASP.NET Core 2.2 (WebAPI)
* Entity Framework Core 2.2
  * Migrations 
  * Shadow Properties and value objects for cleaner POCO's
  * Global Query Filters to implement soft delete. Could also be used to support multi-tenancy.
  * In-Memory driver for unit testing
* SQL Server 2017 Express (LocalDb) 
* MediatR (mediator pattern implementation)
* ASP.NET Core Native Dependency Injection
* xUnit for unit tests
 
### Frontend Stack
* React 16.8 using hooks for state management
* Material UI for implementing GUI following Google's Material Design principles
* Axios for XMLHttpRequests instead of native browser's Fetch
* Jest and Enzyme for unit tests 

## Roadmap
- [x] This version (1.0.0)
    - [x] Contact CRUD with ASP.NET Core API (REST)
    - [x] React client         
    - [x] DDD (Domain Driven Design) hexagonal architecture       
    - [x] Domain Events
    - [x] CQRS
    - [x] Basic Event Sourcing using SQL Server as event store
    - [x] Dependency Inversion (deafult ASP.NET Core IoC container)
    - [x] Automatic database creation
    - [x] Seed database data
    - [x] EF Migrations
    - [x] Unit Tests
    - [x] Integration Tests
    - [x] Logs
    - [x] Code Coverage
    - [x] Continous Integration
- [ ] Future versions
    - [ ] Authentication with user management
    - [ ] Multi-tenancy support
    - [ ] Multi-language support (intl)
    - [ ] GraphQL API service
    - [ ] More robust Event Sourcing using Marten with PostgreSQL
    - [ ] Angular client
    - [ ] Vue.js client
    - [ ] Docker