/* 

https://developer.mozilla.org/en-US/docs/Glossary/Falsy


It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.


A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.



Examples of falsy values in JavaScript :
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")

*/

const truthyOrFalsy = value => {
  if (value) {
    return true;
  }
  return false;
}



console.log(truthyOrFalsy(0n)) // Should print false