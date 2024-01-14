### SQL set Operators
A set operator in SQL is a keyword that lets you combine the results of two queries into a single query.
Sometimes in SQL you'll need to query data from two tables, but instead of using a JOIN you'll need to list the results from both tables in a single result, or in different rows. That's what set operators do.

The different set operators are:
 - UNION
 - UNION ALL
 - INTERSECT
 - EXCEPT
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
   
