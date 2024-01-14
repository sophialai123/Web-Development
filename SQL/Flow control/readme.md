### Flow control
The flow of execution and making decisions within SQL code is achieved with flow control statements. 
They enable you to handle conditions, perform iterative operations, and evaluate expressions. 
Some commonly used flow control statements in SQL are: 
- `IF`
- `IF...ELSE`
- `WHILE`
- `CASE`
---
### `IF`  
The IF statement allows you to execute a code block conditionally based on a specified condition. 
It provides a way to control the flow of execution by checking the condition's result. 
If the condition evaluates to true, the code block within the IF statement is executed;

```
IF condition 

BEGIN 

        -- Code to be executed if the condition is true

END 
```
---
### `IF...ELSE` 
The IF...The ELSE statement extends the IF statement by providing an alternative block of code to execute if the condition is unmet.
It allows you to handle both true and false outcomes of a condition.
If the condition in the IF statement evaluates to true, the code block within the IF section is executed.
Otherwise, the code block within the ELSE section is executed. 

```
IF condition 

BEGIN 

        -- Code to be executed if the condition is true 

END 

ELSE 

BEGIN 

        –- Code to be executed if the condition is false 

END 
```
---
### `WHILE` 
The `WHILE` loop allows you to execute a code block repeatedly if a specified condition remains true. 
It is commonly used for performing iterative operations in SQL. The condition specified in the `WHILE` statement is evaluated before each iteration. 
If the condition is true, the code block within the loop is executed, and the loop continues to the next iteration. If the condition becomes false, the loop is exited, and the program flow continues after the loop. 
The `WHILE` loop allows you to execute a code block repeatedly if a specified condition remains true. 

```
WHILE condition 

BEGIN 

        -- Code to be executed while the condition is true 

END 

```
The WHILE loop is useful when you need to iterate over a set of statements until a particular condition is no longer true.

---
### `CASE` 
The `CASE` statement enables you to evaluate multiple conditions and execute different code blocks based on the condition's result. 
The `CASE` statement allows you to evaluate multiple conditions and execute different code blocks based on the condition's result. 
It provides a way to implement conditional branching in SQL. The `CASE` statement evaluates an expression and compares it with multiple values or conditions using the `WHEN` keyword. 
If a match is found, the corresponding code block is executed. If no condition matches, the code block within the `ELSE` section is executed (if provided). 
This statement helps handle different scenarios and perform other actions based on specific conditions.

```
CASE expression 

WHEN value1 

THEN 

        -- Code to be executed if expression matches value1 

WHEN value2 

THEN 

        -- Code to be executed if expression matches value2

ELSE

        -- Code to be executed if no condition matches

END
```
The CASE statement is useful when you want to perform conditional branching based on the value of an expression.

---

### Sort the flow control statements into their correct statement categories.

```
IF

IF @status = 'Active' BEGIN    PRINT 'User is active.'; END

 This demonstrates the IF statement to execute code based on a condition. 



WHILE:

WHILE @totalItems > 0 SET @totalItems = @totalItems - 1;

This demonstrates the WHILE loop in a concise form, combining the loop condition and decrement operation on the same line.



IF...ELSE:

IF @score >= 80 PRINT 'Pass'; ELSE PRINT 'Fail';

This demonstrates the compact form of the IF...ELSE statement. It checks if the score is greater than or equal to 80 and prints either 'Pass' or 'Fail' accordingly. 



CASE: 

SELECT CASE @day WHEN 1 THEN 'S' WHEN 2 THEN 'M' ELSE 'O' END AS Day; 

This demonstrates the most condensed form of the CASE statement. It evaluates the value of @day and returns 'S' if it equals 1, 'M' if it equals 2, and 'O' for any other value.
```


