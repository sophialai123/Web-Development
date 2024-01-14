### Stored procedures

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
 ---
 ### Input and Output parameters

 Stored procedures can have input parameters that allow values to be passed into the procedure during execution. These parameters are declared when creating the stored procedure.

Output parameters can be used to return values from the stored procedure back to the calling code.

Example
Let's take a simple stored procedure that takes an input parameter (CustomerID) and retrieves all orders for that specific customer in our ECommerceDB example:

#### Create the stored procedure
```
  CREATE PROCEDURE GetCustomerOrders
      @CustomerID INT
  AS
  BEGIN
      SELECT 
          o.OrderID,
          o.OrderDate,
          p.ProductName,
          oi.Quantity,
          p.Price
      FROM 
          [Order] o
      JOIN 
          OrderItem oi ON o.OrderID = oi.OrderID
      JOIN 
          Product p ON oi.ProductID = p.ProductID
      WHERE 
          o.CustomerID = @CustomerID;
  END;
```
#### Execute the stored procedure
```
--Replace 1 with desired customerID
EXEC GetCustomerOrders @CustomerID = 1; 
```
---
#### Create a stored procedure to update the quantity of a product in an inventory system.
Here's an explanation of the Correct Code:

Step 1: The correct code is `CREATE PROCEDURE UpdateProductQuantity`. This line begins the creation of the stored procedure named "UpdateProductQuantity", which will be used to update the quantity of a product.

Step 2: The correct code is `@newQuantity INT, @productID INT`. This line specifies the input parameters for the stored procedure. In this case, we need two parameters: `@newQuantity` to hold the new quantity value, and `@productID` to specify the product to update.

Step 3: The correct code is `DECLARE @currentQuantity INT`;. This line declares a variable `@currentQuantity` that will be used to store the current quantity of the product.

Step 4: The correct code is `SET @currentQuantity = SELECT quantity FROM products WHERE product_id = @productID;`. This line retrieves the current quantity from the products table based on the provided `product ID` and assigns it to the `@currentQuantity` variable.

Step 5: The correct code is `SET @newQuantity = @currentQuantity + @newQuantity;`. This line updates the quantity by adding the new quantity value to the current quantity.

Step 6: The correct code is `UPDATE products SET quantity = @newQuantity WHERE product_id = @productID;`. This line updates the products table, setting the new quantity value for the specified product ID.

Step 7: The correct code is PRINT `'Product quantity updated successfully.'`;. This line displays a success message indicating the completed product quantity update.

