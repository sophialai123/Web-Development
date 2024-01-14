###Stored procedures

Stored procedures are pre-compiled database objects that contain SQL statements or procedural code. 
They are essential to SQL (Structured Query Language) databases.
The primary purpose of stored procedures is to encapsulate and execute SQL statements as a single unit. 
This allows for code reusability, improved performance, enhanced security, and a modular approach to database development.

---
### Creating stored procedures
#### Structure of stored procedures

In terms of structure, a stored procedure is created using the `CREATE PROCEDURE` statement. 
It consists of a name, input/output parameters, and a body containing SQL statements or procedural code. 
Parameters can pass values into the procedure or retrieve values from it, enabling flexible and dynamic behaviour.
- The name is simply a unique identifier for the stored procedure, allowing you to refer to it later when executing or modifying it.
- Input/output parameters are placeholders within the stored procedure that allow you to pass values into the procedure or retrieve values from it. Parameters make stored procedures flexible and dynamic, enabling you to reuse the same process with different values, making your code more efficient.
- The stored procedure contains the SQL statements or procedural code defining the actions to be performed. This can include querying the database, modifying data, performing calculations, or implementing business logic. You can write the code directly within the stored procedure or call other pre-existing procedures or functions.
  
---

### cenario: Finding the Order Total for each Order
Let's walk through a scenario to understand the `CREATE PROCEDURE` statement better. 
Imagine that you are calculating the total price of each order in the Orders table in ECommerceDB example. Remember, In the `ORDER` table, we only have `OrderID`, `CustomerID` and `OrderDate`, and in `ORDERITEM` Table we have the quantity for each Product bought in that order. 
And `Price` of that `Product` is stored in the `PRODUCT` Table. This will require us to create a `JOIN` across three tables: `PRODUC`T, `ORDE`R and `ORDERITEM`, and we will then have to `GROUP BY` each `OrderID`.

1. Start by defining the name of the stored procedure using the `CREATE PROCEDURE` statement. For example, you can name it "CalculateTotalPrice".
  ```
   CREATE PROCEDURE CalculateTotalPrice
   ```
2. Specify the body of the stored procedure. Inside the body, you write SQL statements to retrieve and sum the prices for each orderItem in an Order.
  ```
    CREATE PROCEDURE CalculateTotalPrice
    
    AS
    
    BEGIN
    
           SELECT [Order].OrderID, SUM(OrderItem.Quantity * Product.Price) AS TotalPrice
    
           FROM [Order]
    
           INNER JOIN 
    
                  OrderItem ON [Order].OrderID = OrderItem.OrderID
    
           INNER JOIN
    
                  Product ON OrderItem.ProductID = Product.ProductID
    
           GROUP BY
    
                  [Order].OrderID;
    
    END;
  ```
3. Finally, you can execute the stored procedure by calling its name using the keyword `EXEC`.
   ```
   EXEC CalculateTotalPrice;
   ```
 

