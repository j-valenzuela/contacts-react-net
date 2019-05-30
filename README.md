[![Build Status](https://juanstuff.visualstudio.com/jvContacts/_apis/build/status/j-valenzuela.contacts-react-net?branchName=master)](https://juanstuff.visualstudio.com/jvContacts/_build/latest?definitionId=1&branchName=master)
# contacts-react-net (jvContacts)
Yep, "yet another" contact management React application, but this one shows how to 
implement functional components with React hooks for state management instead of Redux, because Redux + class based components
are so 2018! Additionally, it leverages the latest features in .NET Core 2.2 on the backend. 

While the application use case is very simple, the intention is to 
demonstrate how different architecture patterns and design principles can be integrated 
to support scalability. 

### Prerequisites
You will need the following tools:
* [NodeJS](https://nodejs.org/en/) with the latest version of the NPM package manager. For better experience, I recommend using [https://yarnpkg.com/en/](yarn) 
* [Visual Studio 2017/2019 or Visual Studio Code](https://www.visualstudio.com/downloads/)
* [.NET Core SDK 2.2](https://www.microsoft.com/net/download/dotnet-core/2.2)
* [SQL Server 2017 Express with or without LocalDb](https://www.microsoft.com/en-us/sql-server/sql-server-editions-express)

**IMPORTANT:**
There is a bug in SQL Server 2017 Express LocalDb that throws an exception when creating a new database as
[explained here](https://support.microsoft.com/en-us/help/4096875/fix-access-is-denied-error-when-you-try-to-create-a-database-in-sql-se). If
you have this issue, you will have to install the SQL Server 2017 Cumulative Patch 6 [available here](https://www.microsoft.com/en-us/download/details.aspx?id=56128).

## Setup
Follow these steps to get your development environment set up:

### With Visual Studio
  1. Clone the repository
  2. Open the Solution file in Visual Studio 2017/2019 and hit F5. That't it! 

The solution uses SPA extensions therefore backend and front-end are wired to run together. The backend uses EF migrations, so the database will be created and seeded with a few records. 
If for some reason the database is not created automatically, you can run the SQL scripts located in /database folder in the order they are named after.

### Using Command Line
  1. Clone repository
  2. At the root directory, restore required packages by running:
     ```
     dotnet restore
     ```
  3. Next, build the solution by running:
     ```
     dotnet build
     ```
  4. Next, within the `jvContacts.Web.React\ClientApp` directory, launch the front end by running:
     ```
     yarn start 
     ```
      or
     ```
     npm start
     ```
      Note that this will launch a browser in the next available port. You can close this browser because the one connected to the API is the one from dotnet.

  5. Once the front end has started, within the `jvContacts.Web.React` directory, launch the back end by running:
     ```
	 dotnet run
	 ```
  5. Once the server is ready launch your browser at [http://localhost:5001/](http://localhost:5001/) or the port that appears when dotnet is ready. You can now start using the application.
 
If you get an error about the database, check your connection string in the appsettings.json file to make sure it points to your local database. 

**REMINDER: This is a proof of concept for how an enterprise application could be built
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
* SweetAlert 2

## Roadmap
- [x] This version (1.0.1)
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
    - [x] Client side testing using Jest and react-testing-library (RTL)     
    - [x] **KNOWN ISSUES:** 
      - [x] The Country and State fields in the edit contact form do not trigger the pristine flag due to a bug in react-final-form when used with react-autosuggest: https://github.com/final-form/react-final-form/issues/315
      - [x] Image upload is not enabled, so contact profile picture cannot be updated at this moment
      - [x] Duplicate contacts are allowed. The app is not validating for that. 
- [ ] Future versions 
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
    
