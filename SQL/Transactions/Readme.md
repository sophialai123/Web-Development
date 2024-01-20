### Transacations
In SQL, a transaction is a sequence of database operations executed as a single unit. 
A transaction allows you to group multiple SQL statements, treating them as a logical unit of work. These operations can include inserting, updating, or deleting data from one or more database tables.

Transactions in SQL are designed to ensure data integrity and consistency. They provide a mechanism to manage database changes in a controlled and reliable manner. 
The concept of a transaction is based on the **ACID properties** (Atomicity, Consistency, Isolation, and Durability). 

---


### Begin Transaction:
A transaction begins with the `"BEGIN TRANSACTION"` statement. This marks the starting point of the transaction.

---


### Perform Database Operations:
Within the transaction, you can execute various SQL statements, such as `INSERT`, `UPDATE`, `DELETE`, or `SELECT` queries, to manipulate data in the database


---
### Commit or Rollback:
Once the desired operations are completed, you have two options.
You can either commit the transaction using the `"COMMIT"` statement, which makes the changes permanent and durable, or you can rollback the transaction using the `"ROLLBACK"` statement, which undoes all the changes made within the transaction and restores the database to its previous state.

---

### End Transaction:

After committing or rolling back, the transaction ends. 
At this point, a new transaction can begin, and the database is ready for further operations.

---

### ACID properties

ACID stands for Atomicity, Consistency, Isolation, and Durability. ACID properties in SQL refer to a set of characteristics that ensure the reliability and integrity of transactions in a database system. These properties guarantee that transactions are processed reliably, data remains consistent, concurrent transactions don't interfere with each other, and changes made by transactions are durable and survive system failures.

---

### ACID properties examples
Let's consider a scenario where a bank transfers money from one account to another. We'll perform this transaction using SQL statements.

1. Atomicity:

   ```
    BEGIN TRANSACTION;
    
    UPDATE Accounts SET balance = balance - 1000 WHERE account_id = 123; -- Deduct $1000 from Account A
    UPDATE Accounts SET balance = balance + 1000 WHERE account_id = 456; -- Add $1000 to Account B
    
    COMMIT;
   ```
  - The BEGIN TRANSACTION statement marks the beginning of a transaction.
   - The two UPDATE statements modify the balances of Account A and Account B to reflect the money transfer. 
      The first statement deducts $1000 from Account A, while the second statement adds $1000 to Account B.
   - The COMMIT statement completes the transaction, committing the changes to the database.

If, for example, the second UPDATE statement encounters an error, such as an invalid account ID, the transaction would be rolled back, and both Account A and Account B would remain unchanged. This ensures that the transfer is treated as an atomic operation, and both accounts are left in a consistent state.

---
2. Consistency: Consider a scenario where transferring money should not result in a negative balance:

   ```
       BEGIN TRANSACTION;
    
        DECLARE @balanceA DECIMAL;
        SELECT @balanceA = balance FROM Accounts WHERE account_id = 123; -- Get current balance of Account A
        
        IF (@balanceA >= 1000)
        BEGIN
            UPDATE Accounts SET balance = balance - 1000 WHERE account_id = 123; -- Deduct $1000 from Account A
            UPDATE Accounts SET balance = balance + 1000 WHERE account_id = 456; -- Add $1000 to Account B
            COMMIT;
        END
        ELSE
        BEGIN
            ROLLBACK;
        END
   ```

    - The BEGIN TRANSACTION statement marks the beginning of a transaction.
   -  The DECLARE statement is used to define a variable @balanceA to store the current balance of Account A.
   -  The SELECT statement retrieves the balance of Account A and assigns it to the @balanceA variable.
    - The IF statement checks if the balance of Account A is sufficient for the transfer.
    - If the condition is true, the two UPDATE statements execute, modifying the balances of Account A and Account B. The COMMIT statement completes the transaction.
    - If the balance of Account A is not sufficient, the transaction is rolled back using the ROLLBACK statement, ensuring that the accounts remain in a consistent state.
