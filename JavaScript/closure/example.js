
//currying function
function curried_add(a) {
  // has access to the argument for a
  return function nested_add(b) {
    // has access to the arguments for a and b
    return a + b;
  }
}

// creates a local variable a and assigns it the value 1
let add_one = curried_add(1);

// add_one() still has access to the argument from curried_add()
console.log(add_one(10));



/* Declare a variable named nestedFunction and set it equal to curriedMultiply() called with a number argument.

Declare a second variable, result and set it equal to nestedFunction() called with a number argument.

If you console.log() result, it should log a number. */

function curriedMultiply(a) {
  return function (b) {
    return a * b
  }
}
// Write your code here
let nestedFunction = curriedMultiply(12);

let result = nestedFunction(12);

console.log(result)




/* The function makeGreeting() takes one string argument.

Write additional code to make makeGreeting() return a function.

The returned function should return a concatenation of the first string, a space, and the second string, such as “Hello World”.

You can uncomment the lines below the function to check your work. */


function makeGreeting(string) {
  //Write your code here
  return function (stringb) {
    return `${string} ${stringb}`
  }


}
let hello = makeGreeting('Hello');
let helloWorld = hello('World');
console.log(helloWorld);



/* Currying with Arrow Functions */

function changeColor(color) {
  return function (obj) {
    obj.color = color;
  }
}

// Arrow Functions
const changeColorArrow = color => obj => obj.color = color;