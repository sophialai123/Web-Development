
/*currying function takes one argument, 
 then returns another function that 
 takes the next argument, and so on.  */
 
function add(x) {
  // Only change code below this line
  return function(y) {
    return function (z) {
      return x + y+z
    }
  }
  // Only change code above this line
}

console.log(add(10)(20)(30));



const curried = x => y => x + y
console.log(curried(1)(2))