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
