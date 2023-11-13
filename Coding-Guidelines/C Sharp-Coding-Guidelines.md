# Naming conventions

## Class, Struct, Enums, Methods


```csharp

// Use pascal casing for class, struct, Enums and methods

public class MyClass
{
    public void MyMethod()
    {
       ...
    }
    public void AnotherMethod()
    {
       ...
    }
}

```


## Local Variables

```csharp

// Use camel casing for local variables and method arguments

public class LogService
{
    public void Add(LogEvent logEvent)
    {
        // Correct
        int counter;
        string name;
        int itemCount = 0;

        // Avoid Hungarian notation
        int iCounter;
        string strName;

       
        ...
    }
}

```


## Class Variables

```csharp

// Use underscore with camel casing for class variables (We are using underscores just for consistency with Pulse Code)

public class MyHandler
{
    SomeChainedQuery _someChainedQuery;
    AnotherChainedQuery _anotherChainedQuery;

    public void Handle(...)
    {
        ...
    }
}

```


## Constants


```csharp

// Use pascal casing for Constants

// Correct
public static const string HierarchyType = "CPR";
 
// Avoid Screaming caps
public static const string HIERARCHYTYPE = "DPR";


```


## Abbrevations


```csharp

// Correct
EmployeeDetails employeeDetails;
StudentAssignment studentAssignment;

// use PascalCasing for abbreviations 3 characters or more (2 chars are both uppercase)
CprHelper cprHelper;
XmlService xmlService;
UrlSgment urlSerment;
UIControl uiControl;

// Avoid
EmpDetails empGrp;
StuAssignment stuAssignment;


```

## Type names


```csharp

// Correct

string firstName;
int lastIndex;
bool isSaved;
 
// Avoid system type names
String firstName;
Int32 lastIndex;
Boolean isSaved;

```

## Implicit Types (Using var)

```csharp

// Do not use var for primitive types
int count = 100;
string lastName;
bool isSaving;

// Use for
var userService = new PulseUserService();
var customers = new Dictionary();
var fileStream = File.Create(path);

```


## More on names


```csharp

// Use nouns for Class names

public class Student
{
}

public class IncidentLocation
{
}

public class CustomerCollection
{
}

// Prefix with 'I' interface names that are nouns or adjectives

public interface IMachine
{
}


public interface IConvertable
{
}

// Method names describe an action or a Question

bool CanMarkLiftThisObject(IObject objectToLift) 
{

}

void PerformExport()
{

}

void LoadInitialValues()
{

}

```
## Organize namespaces 

```csharp 

// Examples
namespace Company.Technology.Feature.Subnamespace
{
}
namespace Company.Product.Module.SubModule
{
}
namespace Product.Module.Component
{
}
namespace Product.Layer.Module.Group
{
}

```


## Align curly brackets vertically: 

```csharp 

class Program
{
  static void Main(string[] args)
  {
    //...
  }
}

```


## Comments

```csharp 

 /// <summary>
 /// Add xml comments to classes
 /// </summary>
public class MyClass
{
        /// <summary>
        /// Add xml comments to public methods
        /// </summary>
        /// <param name="riskId">Risk Id</param>
        /// <param name="userId">User Id</param>
        /// <returns>True if deactivated else False</returns>
        public static bool DeactivateRisk(int riskId, Guid? userId = null)
        {
                // Place the comment on a separate line
                if ((oRisk != null)) // Not at the end of a line
                {
                    // Add a space after //
                    var listTasks = db.RRTasks.Where(x => x.ParentId == oRisk.Id).ToList();
                    ...
                    return true;
                }
            }

            return false;
        }
}

```

- Whenever there is a significant logic change, eg if you are updating the logic to fetch last progress updates for an action in PulseActionService, it is a good practice to mention the need for the change and the approach.


## If conditions


```csharp 

// Break individual or a grouped condition to a new line
if(condition1 &&
   condition2 ||
   (groupedSubCondition) &&
  )
{
  ......
}

// Merge subsequent if conditions that do not branch
if(condition1)
{
 if(condition2)
  {
    .......
  }
}

// To
if(condition1 &&
   condition2
  )
{
  .......
}

```

## Complexity


```csharp 

 // Keep classes to 150 to 200 lines of code

 // Keep methods to like 15 to 20 lines of code

 // Keep width of each line to around 100 and try to break to new lines if it exceeds

 // Keep low on Cyclometric complexity

 // Keep depth of methods low

```

https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/quality-rules/ca1502


## Strings


```csharp 

 // Use string interpolation to concatenate short strings

 // Use StringBuilder class to concatenate/append large amounts of text

```


-------------------------------
