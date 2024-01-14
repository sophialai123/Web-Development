### SQL set Operators
A set operator in SQL is a keyword that lets you combine the results of two queries into a single query.
Sometimes in SQL you'll need to query data from two tables, but instead of using a JOIN you'll need to list the results from both tables in a single result, or in different rows. That's what set operators do.

The different set operators are:
 - `UNION`
 - `UNION ALL`
 - `INTERSECT`
 - `EXCEPT`
---
### Using set operators
```
SELECT your_select_query
set_operator
SELECT another_select_query;
```
### set operators Rules to follow:
 - The number of columns selected in each query must match when using set operators
 - Ensure that the data types of the selected columns are compatible between queries
 - If the first query selects three columns, the second query should also select three columns
 - The dtay types selected in the first query should be replicated in the second query(for example, if the first query selects a number and two charater types, the second query should do the same)
 - When ordering results, place the `ORDER BY` calause at the end of the last query
 - Avoid addding the `ORDER BY ` caluse inside each individual `SELECT` query before using the set operator
---
### ` UNION`
The `UNION` set operator allows you to combine the results of two queries. It removes any duplicate results and shows you the combination of both.

```
SELECT ‘Customer’ AS record_type, first_name, last_name
FROM customer
UNION
SELECT ‘Employee’, first_name, last_name
FROM employee
ORDER BY record_type, first_name, last_name;
```
All of the set operators support standard keywords inside the SELECT statement. ** The set operator is just a way of combining results.**

---
### `UNION ALL`
The `UNION ALL` set operator also combines the results from two queries but it does not remove duplicates.
```
SELECT ‘Customer’ AS record_type, first_name, last_name
FROM customer
UNION ALL
SELECT ‘Employee’, first_name, last_name
FROM employee;
```

**The major difference between UNION ALL and UNION in SQL is that UNION removes any duplicate results from the final result set, and UNION ALL does not. UNION performs a DISTINCT on the result set to remove duplicates.**
---
### `INTERSECT`
The `INTERSECT` keyword allows you to find results that exist in **both queries**. Two `SELECT` statements are needed.

```
SELECT first_name, last_name
FROM customer
INTERSECT
SELECT first_name, last_name
FROM employee;
```
---
### `EXCEPT`
The `EXCEPT` set operator will return results that are found in the first query specified that don’t exist in the second query. MINUS is the Oracle specific keyword for this set operator.

With our example data, we could use the `EXCEPT` set operator to find all names in the customer table that don’t exist in the employee table:
```
SELECT first_name, last_name
FROM customer
EXCEPT
SELECT first_name, last_name
FROM employee;

```



