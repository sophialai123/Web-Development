/* Use the sort method in the alphabeticalOrder 
function to sort the elements of arr in alphabetical order.  */

function alphabeticalOrder(arr) {
  // Only change code below this line
  arr = arr.sort((a,b)=> a === b ? 0 : a > b ? 1 : -1)

  return arr
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));





function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

//console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));