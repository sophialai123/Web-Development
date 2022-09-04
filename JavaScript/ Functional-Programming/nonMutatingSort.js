const globalArray = [5, 6, 3, 2, 9];

//return a new array, and not mutate the globalArray variable.
function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = []
  //use concat() to copy the arr
  return newArr.concat(arr).sort((a,b)=>a-b)
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));