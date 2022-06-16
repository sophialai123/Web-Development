/* Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the numbers array or by making your own array! */

const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num;

const squareNums = arr => arr.map(toSquare);

console.log(squareNums(numbers))





// const squareNums = arr => {

//   arr.map(value => {
//     console.log(value ** 2);
//   });
// }

// squareNums(numbers);

