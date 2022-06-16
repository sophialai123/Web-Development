/* We wrote a function, smallestPowerOfTwo(), which takes in an array.

Within our function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than or equal to the current element before using .push() to add it to results. */

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];
    console.log(number)

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    //need to create a new variable
    let j = 1;
    while (j < number) {
      j = j * 2;
      console.log(j)
    }
    results.push(j);

  }
  return results
}

console.log(smallestPowerOfTwo(numbers))
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]