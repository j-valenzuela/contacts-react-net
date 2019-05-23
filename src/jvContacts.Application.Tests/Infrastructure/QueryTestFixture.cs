using System;
using AutoMapper;
using jvContacts.Persistence.Context;
using Xunit;

namespace jvContacts.Application.Tests.Infrastructure
{
  public class QueryTestFixture : IDisposable
  {
    public ContactDbContext Context { get; private set; }
    public IMapper Mapper { get; private set; }

    public QueryTestFixture()
    {
      Context = ContactContextFactory.Create();
      Mapper = AutoMapperFactory.Create();
    }

    public void Dispose()
    {
      ContactContextFactory.Destroy(Context);
    }
  }

  [CollectionDefinition("QueryCollection")]
  public class QueryCollection : ICollectionFixture<QueryTestFixture> { }
}