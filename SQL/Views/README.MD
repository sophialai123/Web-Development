### Views
In SQL, a view is a virtual table derived from one or more existing tables or other views. It is a stored query that can be treated as a table, allowing you to retrieve and manipulate data like a regular table.

### Creating Views

To create a view in SQL, you use the CREATE VIEW statement followed by the name of the view and the SELECT statement that defines the data to be included in the view. 
Example
Suppose we have a table called "Employees" with columns: "EmployeeID", "FirstName", "LastName", and "Salary". We want to create a view that shows the employee ID and full name of all employees earning a salary higher than $50,000.

```
CREATE VIEW HighSalaryEmployees AS
SELECT EmployeeID, CONCAT(FirstName, ' ', LastName) AS FullName
FROM Employees
WHERE Salary > 50000;
```

### Using Views
Once the view is created, you can treat it as a regular table in subsequent queries. For instance, you can retrieve data from the view like this:
`SELECT * FROM HighSalaryEmployees; `
