## Functional Programming Terminology
 - Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in `filter`, the callback function tells JavaScript the criteria for how to filter an array.

- Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

- The functions that take a function as an argument, or return a function as a return value, are called higher order functions

- When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

---

## Avoid Mutations and Side Effects Using Functional Programming

- One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

- Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

```
//// The global variable
let fixedValue = 4;
function incrementer() {

  //do not change the global value 

  let newValue = fixedValue;
  return newValue +=1
}

console.log(incrementer()) //return 5
```

---
## Pass Arguments to Avoid External Dependence in a Function

- Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

```
 // The global variable
let fixedValue = 4;

//Pass an Argument
function incrementer(num) {
   return num = fixedValue +1
}
console.log(incrementer()) 

```
---
## Refactor Global Variables Out of Functions

So far, we have seen two distinct principles for functional programming:

1. Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like `const newArr = arrVar`, where `arrVar` is an array will simply create a reference to the existing variable and not a copy. So changing a value in `newArr` would change the value in `arrVar`.

2. Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.
