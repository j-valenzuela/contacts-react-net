namespace jvContacts.Domain.Interfaces
{
  /// <summary>
  /// This interface is a marker interface to leverage shadow properties and global queries
  /// in EF. Its purpose is to automatically add the IsDeleted field automatically
  /// to domain classes that inherit from it, as well as updating the field automatically
  /// when performing a deletion. Using Global Query Filters we can automatically filter out
  /// records that have the IsDeleted field equal to true. 
  /// </summary>
  public interface ISoftDelete
  {
  }
}
