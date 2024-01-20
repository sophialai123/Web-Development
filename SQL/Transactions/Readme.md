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

---
3.Isolation:
In most database systems, isolation is achieved using different isolation levels, such as Read Uncommitted, Read Committed, Repeatable Read, and Serializable. The appropriate isolation level should be selected based on the application's specific requirements.

EXIT COURSE
Lesson 8 - Error handling
Lesson content
Lesson 9 of 12
Transactions

Transactions

In SQL, a transaction is a sequence of database operations executed as a single unit. A transaction allows you to group multiple SQL statements, treating them as a logical unit of work. These operations can include inserting, updating, or deleting data from one or more database tables.

Transactions in SQL are designed to ensure data integrity and consistency. They provide a mechanism to manage database changes in a controlled and reliable manner. The concept of a transaction is based on the ACID properties (Atomicity, Consistency, Isolation, and Durability). 

Let's learn how a transaction typically works.


Begin Transaction:
A transaction begins with the "BEGIN TRANSACTION" statement. This marks the starting point of the transaction.

Perform Database Operations:
Within the transaction, you can execute various SQL statements, such as INSERT, UPDATE, DELETE, or SELECT queries, to manipulate data in the database.

Commit or Rollback:
Once the desired operations are completed, you have two options. You can either commit the transaction using the "COMMIT" statement, which makes the changes permanent and durable, or you can rollback the transaction using the "ROLLBACK" statement, which undoes all the changes made within the transaction and restores the database to its previous state.

End Transaction:
After committing or rolling back, the transaction ends. At this point, a new transaction can begin, and the database is ready for further operations.


Continued
ACID properties

ACID stands for Atomicity, Consistency, Isolation, and Durability. ACID properties in SQL refer to a set of characteristics that ensure the reliability and integrity of transactions in a database system. These properties guarantee that transactions are processed reliably, data remains consistent, concurrent transactions don't interfere with each other, and changes made by transactions are durable and survive system failures.

Let's delve into each property and understand why they are important.

Select the plus icons (+) below each letter to learn more.


Continued
ACID properties examples

Let's consider a scenario where a bank transfers money from one account to another. We'll perform this transaction using SQL statements.

Atomicity: 

BEGIN TRANSACTION;

UPDATE Accounts SET balance = balance - 1000 WHERE account_id = 123; -- Deduct $1000 from Account A
UPDATE Accounts SET balance = balance + 1000 WHERE account_id = 456; -- Add $1000 to Account B

COMMIT;
The BEGIN TRANSACTION statement marks the beginning of a transaction.
The two UPDATE statements modify the balances of Account A and Account B to reflect the money transfer. The first statement deducts $1000 from Account A, while the second statement adds $1000 to Account B.
The COMMIT statement completes the transaction, committing the changes to the database.
If, for example, the second UPDATE statement encounters an error, such as an invalid account ID, the transaction would be rolled back, and both Account A and Account B would remain unchanged. This ensures that the transfer is treated as an atomic operation, and both accounts are left in a consistent state.


Consistency: 

 Consider a scenario where transferring money should not result in a negative balance:

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
END;
The BEGIN TRANSACTION statement marks the beginning of a transaction.
The DECLARE statement is used to define a variable @balanceA to store the current balance of Account A.
The SELECT statement retrieves the balance of Account A and assigns it to the @balanceA variable.
The IF statement checks if the balance of Account A is sufficient for the transfer.
If the condition is true, the two UPDATE statements execute, modifying the balances of Account A and Account B. The COMMIT statement completes the transaction.
If the balance of Account A is not sufficient, the transaction is rolled back using the ROLLBACK statement, ensuring that the accounts remain in a consistent state.

Isolation:

In most database systems, isolation is achieved using different isolation levels, such as Read Uncommitted, Read Committed, Repeatable Read, and Serializable. The appropriate isolation level should be selected based on the application's specific requirements.

For example, using the Read Committed isolation level:

  ```
    SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
   
      BEGIN TRANSACTION;
      
      -- Perform read and write operations within the transaction
      
      COMMIT;

  ```
    - The SET TRANSACTION ISOLATION LEVEL statement sets the isolation level for the transaction. In this case, we set it to READ COMMITTED.
     - The BEGIN TRANSACTION statement marks the beginning of a transaction.
    -  Within the transaction, read and write operations can be performed on the database.
     - The COMMIT statement completes the transaction.

The Read Committed isolation level ensures that each query within the transaction sees only committed data from other transactions, preventing dirty reads. It guarantees that each transaction operates on the most recent committed data available at the time of execution.

---

4. Durability
Durability is typically managed internally by the database management system (DBMS) and doesn't require explicit code from the application developer. You can rely on the DBMS to handle the persistence and recovery mechanisms to provide durability guarantees.

---

### Activity Definitions

1. Atomicity
   - Transaction: A transaction is a logical unit of work that contains one or more SQL statements. It is treated as an atomic operation, meaning that either all of its changes are committed, or none of them are. If any part of the transaction fails, it is rolled back, ensuring that the database remains in a consistent state.
   - Rollback: A rollback is a mechanism that undoes the changes made by a transaction and restores the database to its previous state. It is used when a transaction encounters an error or when it needs to be cancelled.

2. Consistency
     - Primary Key Constraint: A primary key constraint ensures that a column or combination of columns in a table uniquely identifies each row. It enforces the consistency of data by preventing duplicate or null values in the primary key column(s).
    - Foreign Key Constraint: A foreign key constraint establishes a relationship between two tables by linking the primary key of one table to the foreign key of another table. It maintains data consistency by enforcing referential integrity, ensuring that the values in the foreign key column(s) match the values in the primary key column(s) of the referenced table.
   - CHECK Constraint: A CHECK constraint is used to ensure that the values in a column meet specific conditions. It ensures data consistency by allowing only valid data to be inserted or updated in the column.


3. Isolation
   
  - Dirty Read: A dirty read occurs when a transaction reads uncommitted data from another transaction that has not been committed yet. It is a consequence of a low isolation level, and it can lead to inconsistent or incorrect results.
   - Repeatable Read: Repeatable read is an isolation level that guarantees that a transaction will see the same data consistently throughout the transaction, even if other transactions modify the data concurrently.
   - Serializable: Serializable is the highest isolation level, which ensures that transactions are executed in a serializable order. It provides the strongest level of data consistency by preventing phenomena such as dirty reads, non-repeatable reads, and phantom reads.
  -  Read Uncommitted: Read uncommitted is the lowest isolation level, where transactions can read uncommitted and potentially inconsistent data from other concurrent transactions. It offers the least level of data consistency.
