/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

function find_average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    // sum of the array
    sum += array[i]
  }

  let avg = sum / array.length
  return avg;
}


console.log(find_average([1, 2, 3, 4]), 2.5)

console.log(find_average([1, 2, 3]), 2);
console.log(find_average([1, 1, 1]), 1)