using System;
using jvContacts.Persistence.Context;

namespace jvContacts.Application.Tests.Infrastructure
{
  public class CommandTestBase : IDisposable
  {
    protected readonly ContactDbContext _context;

    public CommandTestBase()
    {
      _context = ContactContextFactory.Create();
    }

    public void Dispose()
    {
      ContactContextFactory.Destroy(_context);
    }
  }
}