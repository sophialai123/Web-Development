### Error Handling

Error handling in SQL refers to capturing and managing errors that occur during the execution of SQL statements or stored procedures.
It allows you to handle exceptional situations and take appropriate actions when errors occur. 

Some of the commonly used error handling methods in SQL are:
 1. `TRY...The CATCH block `
 2. `RAISERROR statement`
 3. `THROW statement `
 4.  `ERROR functions`

---
### `TRY...The CATCH` block
- The TRY...The CATCH block is used to handle and manage errors in SQL. It allows you to enclose a block of code within the TRY block and specify how to handle any possible errors.
- If an error occurs within the TRY block, the control is transferred to the CATCH block, where you can handle the error and perform necessary actions, such as logging the error, rolling back a transaction, or displaying an error message.
- `EXEC DivideNumbers @Dividend = 10, @Divisor = 0`;

```
CREATE PROCEDURE DivideNumbers

    @Dividend INT,

    @Divisor INT

AS

BEGIN

    BEGIN TRY

        DECLARE @Result DECIMAL(10, 2);

        SET @Result = @Dividend / @Divisor;

        PRINT 'Result: ' + CAST(@Result AS VARCHAR);

    END TRY

    BEGIN CATCH

        PRINT 'An error occurred: ' + ERROR_MESSAGE();

    END CATCH

END;
```
---

### `RAISERROR` statement
- The RAISERROR statement generates a custom error message and explicitly raises an error within the SQL code.
- You can specify the severity level, error message, and optional parameters to provide additional information about the error.
- RAISERROR is often used in conjunction with the TRY...CATCH block to raise and handle custom errors when certain conditions are met.
- Execute the stored procedure with a valid divisor `EXEC DivideByZeroErrorProcedure @Dividend = 10, @Divisor = 2;`
- Execute the stored procedure with a divisor of zero `EXEC DivideByZeroErrorProcedure @Dividend = 10, @Divisor = 0;`

  ```
    CREATE PROCEDURE DivideByZeroErrorProcedure
  
      @Dividend INT,
  
      @Divisor INT
  
  AS
  
  BEGIN
  
      BEGIN TRY
  
          DECLARE @Result DECIMAL(10, 2);
  
          -- Simulate a divide by zero error
  
          IF @Divisor = 0
  
          BEGIN
  
              DECLARE @ErrorMessage NVARCHAR(100) = 'Cannot divide by zero.';
  
              RAISERROR (@ErrorMessage, 16, 1);
  
          END
        
          SET @Result = @Dividend / @Divisor;
  
          PRINT 'Result: ' + CAST(@Result AS NVARCHAR(20));
  
      END TRY
  
      BEGIN CATCH
  
          PRINT 'An error occurred: ' + ERROR_MESSAGE();
  
      END CATCH
  
    END;
 ```

---
### `THROW` statement

- The `THROW` statement is another way to raise an exception and generate a custom error message in SQL.
- It is similar to `RAISERROR` but provides a more streamlined syntax and is recommended for newer versions of SQL Server.
- The `THROW` statement allows you to raise an error and specify the error number, severity, state, and message optionally.
- `EXEC CustomErrorProcedure @Value = -5;`

```
    CREATE PROCEDURE CustomErrorProcedure
      @Value INT
  
    AS
  
    BEGIN
  
      BEGIN TRY
  
          -- Simulate a condition that triggers an error
  
          IF @Value < 0
  
          BEGIN
  
              DECLARE @ErrorMessage NVARCHAR(100) = 'Value cannot be negative.';
  
              THROW 50000, @ErrorMessage, 1;
  
          END
          PRINT 'No error occurred.';
  
      END TRY
  
      BEGIN CATCH
  
          PRINT 'An error occurred: ' + ERROR_MESSAGE();
  
      END CATCH
   END;
 ```

---

### `ERROR` functions
- SQL provides several built-in functions to retrieve information about errors that have occurred.
- These functions include `ERROR_NUMBER()`, `ERROR_MESSAGE()`, `ERROR_SEVERITY()`, `ERROR_STATE()`, and `ERROR_LINE()`.
- You can use these functions within the `CATCH` block to retrieve specific details about the error and include them in error handling logic or error logging.
- `EXEC ErrorInfoProcedure;`
- This will trigger the custom error and display detailed information about the error, including its number, message, severity, state, and the line number where the error occurred.

```
  CREATE PROCEDURE ErrorInfoProcedure
    AS
    
    BEGIN
    
        BEGIN TRY
    
            -- Simulate a custom error
    
            DECLARE @ErrorMessage NVARCHAR(100) = 'This is a custom error.';
    
            DECLARE @ErrorSeverity INT = 15;
    
            DECLARE @ErrorState INT = 1;
    
            RAISERROR(@ErrorMessage, @ErrorSeverity, @ErrorState);
    
        END TRY
        BEGIN CATCH
    
            PRINT 'Error Number: ' + CAST(ERROR_NUMBER() AS NVARCHAR(10));
    
            PRINT 'Error Message: ' + ERROR_MESSAGE();
    
            PRINT 'Error Severity: ' + CAST(ERROR_SEVERITY() AS NVARCHAR(10));
    
            PRINT 'Error State: ' + CAST(ERROR_STATE() AS NVARCHAR(10));
    
            PRINT 'Error Line: ' + CAST(ERROR_LINE() AS NVARCHAR(10));
    
        END CATCH
    
     END;
 ```


