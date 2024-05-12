
[Challenge links](https://leetcode.com/problems/immediate-food-delivery-ii/description/?envType=study-plan-v2&envId=top-sql-50)


Table: Delivery

+-----------------------------+---------+
| Column Name                 | Type    |
+-----------------------------+---------+
| delivery_id                 | int     |
| customer_id                 | int     |
| order_date                  | date    |
| customer_pref_delivery_date | date    |
+-----------------------------+---------+
delivery_id is the column of unique values of this table.
The table holds information about food delivery to customers that make orders at some date and specify a preferred delivery date (on the same order date or after it).
 

If the customer's preferred delivery date is the same as the order date, then the order is called immediate; otherwise, it is called scheduled.

The first order of a customer is the order with the earliest order date that the customer made. It is guaranteed that a customer has precisely one first order.

Write a solution to find the percentage of immediate orders in the first orders of all customers, rounded to 2 decimal places.

The result format is in the following example.

Example 1:

Input: 
Delivery table:
+-------------+-------------+------------+-----------------------------+
| delivery_id | customer_id | order_date | customer_pref_delivery_date |
+-------------+-------------+------------+-----------------------------+
| 1           | 1           | 2019-08-01 | 2019-08-02                  |
| 2           | 2           | 2019-08-02 | 2019-08-02                  |
| 3           | 1           | 2019-08-11 | 2019-08-12                  |
| 4           | 3           | 2019-08-24 | 2019-08-24                  |
| 5           | 3           | 2019-08-21 | 2019-08-22                  |
| 6           | 2           | 2019-08-11 | 2019-08-13                  |
| 7           | 4           | 2019-08-09 | 2019-08-09                  |
+-------------+-------------+------------+-----------------------------+
Output: 
+----------------------+
| immediate_percentage |
+----------------------+
| 50.00                |
+----------------------+
Explanation: 
The customer id 1 has a first order with delivery id 1 and it is scheduled.
The customer id 2 has a first order with delivery id 2 and it is immediate.
The customer id 3 has a first order with delivery id 5 and it is scheduled.
The customer id 4 has a first order with delivery id 7 and it is immediate.
Hence, half the customers have immediate first orders.

---
### SQL TABLE

```
create  table Delivery
(delivery_id  int, customer_id int, order_date date, customer_pref_delivery_date date)

insert into Delivery(delivery_id, customer_id, order_date , customer_pref_delivery_date )
VALUES (1,1,'2019-08-01','2019-08-02'),
(2,2,'2019-08-02','2019-08-02')
,(3,1,'2019-08-11','2019-08-12')
,(4,3,'2019-08-24','2019-08-24'),
(5,3,'2019-08-21','2019-08-22'),
(6,2,'2019-08-11','2019-08-13'),
(7,4,'2019-08-09','2019-08-09')
```

---
### Solutions
```
WITH CTE AS(select*, RANK() OVER (PARTITION  BY customer_id order by order_date ) as FIRST_ORDER,
(CASE WHEN DATEDIFF(DAY,order_date, customer_pref_delivery_date) = 0 THEN  1.0 else 0 END) AS immediate_counts
from Delivery) 

SELECT round(100 * sum(immediate_counts) / count(immediate_counts),2) as 'immediate_percentage'
 FROM CTE
 where FIRST_ORDER = 1

```


