/* The every method works with arrays 
to check if every element passes a particular 
test. It returns a Boolean value - true 
if all values meet the criteria, false if not. */

function checkPositive(arr) {
  return arr.every(num => num >=0)
}

console.log(checkPositive([1, 2, 3, -4, 5]));
console.log(checkPositive([1, 2, 3, 4, 5]))



/* The some method works with arrays to 
check if any element passes a particular test.
 It returns a Boolean value - true if any of 
 the values meet the criteria, false if not. */
 function checkPositive2(arr) {
  return arr.some(num => num >=0)
}

console.log(checkPositive2([1, 2, 3, -4, 5]));
