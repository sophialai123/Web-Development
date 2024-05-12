
[Challenge links](https://leetcode.com/problems/immediate-food-delivery-ii/description/?envType=study-plan-v2&envId=top-sql-50)

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


