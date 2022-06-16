/* Write a function factorial() that takes a number as an argument and returns the factorial of the number.

factorial formula: n! = n × (n−1)!   >>>>> n * factorial(n - 1)
 

Example:

factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
Assume only positive numbers will be given as an argument for the factorial() function. */

const factorial = num => {

  //Make a Factorial Function in JavaScript by using Recursion
  if (num > 0 && num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}


/* solution:

var f = [];
function factorial(n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n - 1) * n;
} */

console.log(factorial(6));