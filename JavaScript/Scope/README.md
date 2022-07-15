## Scope

Scope defines where variables can be accessed or referenced. While some variables can be accessed from anywhere within a program, other variables may only be available in a specific context.

---

## Blocks and Scope

A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.

---
## Global Scope

In global scope, variables are declared outside of blocks. These variables are called global variables.Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

```
//global scope.
const color = 'blue';


const returnSkyColor = () => {
  return color; // blue 
};
 
console.log(returnSkyColor()); // blue

```

---
## Block Scope

When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

Variables that are declared with block scope are known as **local variables** because they are only available to the code that is part of the same block.

```
const logSkyColor = () => {
  //Block Scope
  let color = 'blue'; 
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError

```
---


## Scope Pollution

When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.


Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

```
let num = 50;
 
const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};
 
logNum(); // Prints 100
console.log(num); // Prints 100

```

You’ll notice:

  - We have a variable num.
  
  - Inside the function body of logNum(), we want to declare a new variable but **forgot to use the let keyword.**
  
  - When we call logNum(), num gets reassigned to 100.
  
  - The reassignment inside logNum() affects the global variable num.
  
  - Even though the reassignment is allowed and we won’t get an error, if we decided to use num later,we’ll unknowingly use the new value of num.

---

## Practice Good Scoping


Given the challenges with global variables and scope pollution, we should follow best practices for scoping our variables as tightly as possible using block scope.

Tightly scoping your variables will greatly improve your code in several ways:

  - It will make your code more legible since the blocks will organize your code into discrete sections.
  
  - It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!

  - It’s easier to maintain your code, since your code will be modular.
  
  - It will save memory in your code because it will cease to exist after the block finishes running.

Here’s another example of how to use block scope, as defined within an if block:


```
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};
 
console.log(color); // ReferenceError
```

 - We create a variable dusk inside the logSkyColor() function.

 - After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is truthy.

 - Within the if block, the color variable holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.
  
 - While we use block scope, we still pollute our namespace by reusing the same variable name twice. A better practice would be to rename the variable inside the block.

Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace. If a variable does not need to exist outside a block— it shouldn’t!

---
## Review: Scope
In this lesson, you learned about scope and how it impacts the accessibility of different variables.


 - Scope refers to where variables can be accessed throughout the program, and is determined by where and how they are declared.
  
 - Blocks are statements that exist within curly braces {}.
  
 - Global scope refers to the context within which variables are accessible to every part of the program.
  
- Global variables are variables that exist within global scope.


 - Block scope refers to the context within which variables are accessible only within the block they are defined.
  
- Local variables are variables that exist within block scope.

- Global namespace is the space in our code that contains globally scoped information.
  
- Scope pollution is when too many variables exist in a namespace or variable names are reused.
