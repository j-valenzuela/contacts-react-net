namespace jvContacts.Domain.Interfaces
{
  /// <summary>
  /// This interface is a marker interface to leverage shadow properties in EF. Its purpose is
  /// to automatically add the CreatedBy, ModifiedBy, CreatedOn and ModifiedOn fields automatically
  /// to domain classes that inherit from it, as well as updating the fields automatically
  /// when performing database transactions.
  /// </summary>
  public interface IAuditable
  {
  }
}
