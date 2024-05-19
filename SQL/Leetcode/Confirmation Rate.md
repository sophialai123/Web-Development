[1934. Confirmation Rate](https://leetcode.com/problems/confirmation-rate/description/?envType=study-plan-v2&envId=top-sql-50)


### Solution 1

```
WITH totals AS
(
SELECT
user_id,
SUM(CASE WHEN Action = 'confirmed' THEN 1 ELSE 0 END) numerator,
COUNT(*) denominator
FROM Confirmations
GROUP BY user_id
)

SELECT
su.user_id,
ISNULL(ROUND(CAST(numerator AS DECIMAL) / CAST(denominator AS DECIMAL),2),0) as confirmation_rate
FROM signups su
LEFT JOIN totals con ON con.user_id = su.user_id
```
