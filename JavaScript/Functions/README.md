# Functions

Functions are one of the fundamental building blocks in JavaScript. A function is a reusable set of statements to perform a task or calculate a value. Functions can be passed one or more values and can return a value at the end of their execution. In order to use a function, you must define it somewhere in the scope where you wish to call it.

---

## Function Declaration

Function declarations are used to create named functions. These functions can be called using their declared name. Function declarations are built from:

- The function keyword.
- The function name.
- An optional list of parameters separated by commas enclosed by a set of parentheses ().
- A function body enclosed in a set of curly braces {}.

```
function add(num1, num2) {
  return num1 + num2;
}
```
---
## Function Parameters

**Inputs to functions** are known as parameters when a function is declared or defined. **Parameters** are used as **variables** inside the function body. When the function is called, these parameters will have the **value **of whatever is passed in as **arguments**. It is possible to define a function without parameters.


```
// The parameter is name
function sayHello(name) {
  return `Hello, ${name}!`;
}
```

---
## Arrow Functions (ES6)

Arrow function expressions were introduced in ES6. These expressions are clean and concise. The syntax for an arrow function expression does not require the function keyword and uses a fat arrow => to separate the parameter(s) from the body.

There are several variations of arrow functions:

 - Arrow functions with a single parameter do not require () around the parameter list.

 - Arrow functions with a single expression can use the concise function body which returns the result of the expression without the return keyword.


```
// Arrow function with two arguments 
const sum = (firstParam, secondParam) => { 
  return firstParam + secondParam; 
}; 
console.log(sum(2,5)); // Prints: 7 
 
// Arrow function with no arguments 
const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); // Prints: hello
 

// Arrow functions with a single argument 
const checkWeight = weight => { 
  console.log(`Baggage weight : ${weight} kilograms.`); 
}; 
checkWeight(25); // Prints: Baggage weight : 25 kilograms.
 
 
// Concise arrow functions
const multiply = (a, b) => a * b; 
console.log(multiply(2, 30)); // Prints: 60 

```

---

## return Keyword

When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is undefined.

To pass back information from the function call, we use a return statement

Functions return (pass back) values using the return keyword. return ends function execution and returns the specified value to the location where it was called. A common mistake is to forget the return keyword, in which case the function will return undefined by default.


The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.

```
// With return
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function:
sum(3, 6); // output 9
 
// Without return, so the function doesn't output the sum
function sum(num1, num2) {
  num1 + num2;
}

```

---

## Helper Functions

We can also use the **return value of a function inside another function**. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:


```
function multiplyByNineFifths(number) {
  return number * (9/5);
};
 
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
 
getFahrenheit(15); // Returns 59

```

  - getFahrenheit() is called and 15 is passed as an argument.
  
  - The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
  
  - multiplyByNineFifths() takes the argument of 15 for the number parameter.
  
  - The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.


  - 27 is returned back to the function call in getFahrenheit().
  
  - getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
  
  - Finally, 59 is returned back to the function call getFahrenheit(15).


---

## Function Expressions

Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.


To declare a function expression:

 1. Declare a variable to make the variable’s name be the name, or identifier, of your function. Since the release of ES6, it is common practice to use **const**as the keyword to declare the variable.

 2. Assign as that variable’s value an anonymous function created by using the function keyword followed by a set of parentheses with possible parameters. Then a set of curly braces that contain the function body.

```
const plantNeedsWater = function(day){
  if (day ==='Wednesday'){
    return true
  }else{
    return false
  }
}

console.log(plantNeedsWater("Tuesday"))
```