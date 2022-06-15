/* FizzBuzz
Write a fizzbuzz() function that takes in a number, n, and returns an array of the numbers from 1 to n. For multiples of three, use "Fizz" instead of the number, and for the multiples of five, use "Buzz". For numbers that are multiples of both three and five, use "FizzBuzz" (capitalization matters).

For example, fizzbuzz(16) should return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16].

This challenge was reported to have been asked at interviews with many top companies, including Google. If you’ve covered the material in Pass the Technical Interview with JavaScript or an equivalent, you should be able to solve this challenge. If you have trouble, try refreshing your knowledge there first. */

function fizzbuzz(n) {
  const newArray = [];
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      newArray.push("Fizz");
    } else if (i % 5 === 0) {
      newArray.push("Buzz");
    } else {
      newArray.push(i)
    }
  }
  return newArray;
}


// if I do not use console.log the fizzbuzz function and just call the fizzbuzz function , it will not return undefined and do not need to create newArray
console.log(fizzbuzz(16));
//console.log(fizzbuzz(100));




