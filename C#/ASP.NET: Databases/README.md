
#### Database Model
 - Entity Framework uses C# classes to define the database model.
 - This is an in-memory representation of data stored in a database table.
 - Several model classes combine to form the schema for the database.
 - Each property maps to a column in a database table.
 - The bottom line in the example shows a type of `Continent` which implies a relationship to another table.

```
using System;

public class Country
{
  public string ID { get; set; }
  public string ContinentID { get; set; }
  public string Name { get; set; }
  public int? Population { get; set; }
  public int? Area { get; set; }
  public DateTime? UnitedNationsDate { get; set; }
        
  public Continent Continent { get; set; }
}
```
---

#### Database Context
  - The Entity Framework database context is a C# class that provides connectivity to an external database for an application.
  - It relies on the `Microsoft.EntityFrameworkCore` library to define the DB context which maps model entities to database tables and columns.
  - The `DbContextOptions` are injected into the context class via the constructor. The options allow configuration changes per environment so the Development DB is used while coding and testing but the Production DB would be referenced for real work.
  -  The `DbSet` is an in-memory representation of a table or view which has a number of member methods that can return a `List<T>` of records or a single record.

```
using Microsoft.EntityFrameworkCore;

public class CountryContext : DbContext
{
  public CountryContext(DbContextOptions<CountryContext> options)
      : base(options)
  {
  }

  public DbSet<Country> Countries { get; set; }
  public DbSet<Continent> Continents { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<Country>().ToTable("Country");
    modelBuilder.Entity<Continent>().ToTable("Continent");
  }
}
```
---

