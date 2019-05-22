using System;

namespace jvContacts.Application.Exceptions
{
  public class DuplicateException : Exception
  {
    public DuplicateException(string name, object key)
        : base($"Entity \"{name}\" cannot have duplicate ({key}).")
    {
    }

  }
}
