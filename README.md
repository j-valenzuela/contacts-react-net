# contacts-react-net
Yep, "yet another" contact management React application, but this one shows how to implement React hooks for state management instead of Redux, while leveraging the latest features in .NET Core 2.2 on the backend. 

This demo was created with Visual Studio 2019 (Community), but it can also be used with Visual Studio Code. While the application use case is very simple, the intention is to demonstrate how different architecture patterns and design principles can be integrated to support scalability.   

#### Architecture
* Clean Architecture and Clean Code
* Domain Driven Design (DDD)
* Domain Events
* Command Query Responsibility Segregation (CQRS)
* Event Sourcing (ES)
* Test Driven Development (TDD)

#### Backend Stack
* ASP.NET Core 2.2 (WebAPI)
* ASP.NET Core 2.2 Authentication
* Entity Framework Core 2.2
  * Migrations 
  * Shadow Properties
  * Global Query Filters
  * In-Memory driver for unit testing
* SQL Server 2017 for relational data storage
* PostgreSQL with Marten for Event Sourcing 
* MediatR (mediator pattern implementation)
* Serilog for structured logging
* Swagger UI for API interaction
* ASP.NET Core Native Dependency Injection
* ASP.NET Core 2.2 Health Checks
* xUnit for unit tests
 
#### Frontend Stack
* React 16.8 using hooks for state management
* Material UI for implementing GUI following Google's Material Design principles
* Axios for XMLHttpRequests instead of native browser's Fetch
* Jest and Enzyme for unit tests 

 