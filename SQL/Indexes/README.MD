### Indexes
An index in SQL is a database object that improves the **speed and efficiency** of data retrieval operations on a table.

An index is created on one or more columns of a table, allowing the database system to quickly locate the rows that satisfy a specific search condition. It is a separate data structure containing a sorted copy of one or more columns from the table and pointers to the corresponding table rows.

By creating an index on commonly searched columns, the database system can quickly locate the relevant rows and reduce the need for full table scans.

The primary purpose of an index is to improve query performance. When a query includes a search condition on an indexed column, the database engine can utilise the index to narrow the search space and access only the necessary rows more efficiently. 
This results in reduced disk I/O operations and faster data retrieval.

While indexes significantly enhance read performance, they come with trade-offs. Indexes require additional disk space to store the index structure and impose overhead during data modification operations.
When data is inserted, updated, or deleted, the corresponding indexes must be adjusted to reflect the changes. Consequently, excessive or poorly chosen indexes can lead to increased storage requirements and slower write performance

---
### Creating Indexes

To create an `index` in SQL, you can use the `CREATE INDEX` statement followed by the index name, the table name, and the column(s) to be indexed. Here's a simple example of creating an index on a table for beginners:

Let's assume we have a table called "Employees" with columns "EmployeeID", "FirstName", "LastName", and "Salary". 
We want to create an index on the "LastName" column to improve the performance of queries that involve searching or sorting by last name.
`CREATE INDEX idx_LastName ON Employees (LastName); `

After creating the index, the database engine will automatically maintain the index as new rows are inserted, updated, or deleted in the "Employees" table. This ensures that the index stays up-to-date and provides improved query performance.

It's important to note that the indexed column (s) should be chosen based on your application's specific query patterns and performance requirements. Indexing columns frequently used in search conditions or join operations can significantly boost query performance.
