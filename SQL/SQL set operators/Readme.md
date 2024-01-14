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
