/* The .forEach() method executes a callback function on each of the elements in an array in order. 
A callback function is a function passed as an argument into another function.
*/

const numbers = [28, 77, 45, 99, 27];
numbers.forEach(element => {
  //console.log(element) //loop each item in the numbers array
});


/* The .map() method executes a callback function on each element in an array. 
It returns a new array made up of the return values from the callback function. */

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0] //return the first character of each word.
})

console.log(secretMessage.join(''));



const bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => {
  return num / 100;
})
console.log(smallNumbers)



/* The .filter() Method,  returns a new array
The .filter() method executes a callback function on each element in an array. 
The callback function for each of the elements must return either true or false. 
The returned array is a new array with any elements for which the callback function returns true.
 */
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
const shortWords = words.filter(word => {
  return word.length < 5;
});
console.log(shortWords)


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7; // return elements that have more than 7 characters
})
console.log(longFavoriteWords)


/* Calling .findIndex() on an array will return the index of the first element that 
evaluates to true in the callback function.*/
const jumbledNums = [123, 25, 78, 5, 9];
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen) // return the index of the first element that is true


//If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.
// const greaterThan1000 = jumbledNums.findIndex(num => {
//   return num > 1000;
// });

// console.log(greaterThan1000); // Output: -1



const animalsArray = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

//find the index of the element that has the value 'elephant'
const foundAnimal = animalsArray.findIndex(element => {
  return element === "elephant";
})

console.log(foundAnimal) // return the first index matches the condition


//Call .findIndex() on the animals array and return the index of the first element that starts with 's'
const startsWithS = animalsArray.findIndex(firstS => {

  for (let i = 0; i < animalsArray.length; i++) {
    if (firstS.includes("s")) {
      console.log(firstS)
      return firstS;
    }
  }

})
console.log(startsWithS)

//index of the first element that starts with 'm'
const startWithM = animalsArray.findIndex(animal => {
  if (animal[0] === 'm') {
    console.log(animal)
    return animal;
  };
});
console.log(startWithM)


/* The .reduce() Method
The .reduce() method iterates through an array and returns a single value.

*/

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {

  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
})

console.log(newSum) // return reduce value


//The .reduce() method can also take an optional second parameter to set an initial value for accumulator
const newNum = [1, 3, 5, 7];
const newSums = newNum.reduce((accumulator, currentValue) => {

  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10)//<- Second argument for .reduce() is also callback function

console.log(newSums) // return reduce value



/* The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
It doesn't modify the array. */

const newWords = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// check if there are words that are fewer than 6 characters
console.log(newWords.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array,any words longer than 5 characters
const interestingWords = newWords.filter(charc => {
  return charc.length > 5;
})
console.log(interestingWords)


//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// every word is greater than 5 , true or false
console.log(interestingWords.every((word) => {
  return word.length > 5;
}));
