[ASP.NET Cheatsheet](https://www.codecademy.com/learn/asp-net-i/modules/asp-net-databases/cheatsheet)
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
#### DbSet Type
 - The Entity Framework type DbSet represents a database table in memory.
 - It is typically used with a `<T>` qualifier. The type, or `T`, is one of your database model classes.
 - The ModelBuilder binds each database table entity to a corresponding `DbSet`.
 - `DbSet` has a number of member methods that can return a `List<T>` of records or a single record.

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
#### Entity Framework Configuration
In ASP.NET Core, a database may be connected to a web app using Entity Framework. There are four common steps for any setup:

 - Define one or more database model classes and annotate them
 - Define a database context class that uses `DbSet` to map entities to tables
 - Define a database connection string in `appsettings.json`
 - Add the Entity Framework service in `Startup.ConfigureServices()`
---
#### Database Connection String
- The Entity Framework context depends on a database connection string that identifies a physical database connection.
- It is typically stored in `appsettings.json`.
- You can define multiple connection strings for different environments like Development, Test, or Production.
- Each database product has specific requirements for the syntax of the connection string.
- This might contain the database name, user name, password, and other options.

```
{
  "ConnectionStrings": {
    "CountryContext": "Data Source=Country.db"
  }
}
```
---
#### Creating the Schema
  - Entity Framework provides command-line tools that help manage the connected database.
  -  Use these commands in the bash shell or Windows command prompt to create an initial database file and schema. This will read the context class and evaluate each database model represented by a `DbSet`.
  -  The SQL syntax necessary to create all schema objects is then generated and executed.
```
dotnet ef migrations add InitialCreate
dotnet ef database update
```
---
#### Saving Changes
  - The Entity Framework context DbSet member provides the `Attach()` method to update an existing record,
  - the `Add()` method to insert a new record, and
  - the Remove() method to delete an existing record.
  - Any combination of multiple records can batched before saving.

**Use the EF context `SaveChanges()` or `SaveChangesAsync()` methods to persist all inserted, updated, and deleted records to the database table.**

```
// Assuming Country is of type Country
// Assuming _context is of a type inheriting DbSet

public async Task<IActionResult> OnPostAsync(string id)
{
  // update
  _context.Attach(Country).State = EntityState.Modified;

  // insert
  await _context.Countries.AddAsync(Country);

  // delete
  Country Country = await _context.Countries.FindAsync(id);

  if (Country != null)
  {
    _context.Countries.Remove(Country);
  }

  // all three methods must be followed by savechanges
  await _context.SaveChangesAsync(); 
  
  return RedirectToPage("./Index");
}
```
---

#### LINQ Queries
 - The Entity Framework `DbSet` entities can manage complex queries using C# `LINQ` syntax.
 - This is referenced from the `System.Linq library.`
 - All of the `Where()` and `OrderBy()` clauses are evaluated in the final statement that calls `ToListAsync()`.
 - EF evaluates all options and generates a SQL `SELECT` statement with corresponding `WHERE` and `ORDERBY` clauses.

