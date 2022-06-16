/* Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];
 
justCoolStuff(arr1, arr2); // Should return ['this']
You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own! */


const justCoolStuff = (arr1, arr2) => {

  /* Method 1:
  
  //combine two arrays first,the concat() method concatenates (joins) two or more arrays.
  const combineArray = arr2.concat(arr1);

  //create a new array:
  const newArray = [];

  //filter the combineArray,and return the same value
  combineArray.filter((element, index) => {
    if (combineArray.indexOf(element) === index) {
      return true;
    } else {
      newArray.push(element);
    }
  })
  return newArray; */


  /* Method 2: use filter and includes */

  return arr1.filter(item => arr2.includes(item))

}



const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = ['rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]





// As a function declaration AND using named function w/ a loop:
function justCoolStuffs(firstArray, secondArray) {
  function isInSecondArray(item) {
    for (let i = 0; i < secondArray.length; i++) {
      if (secondArray[i] === item) {
        return true
      }
    }
    return false
  }
  return firstArray.filter(isInSecondArray)
}

console.log(justCoolStuffs(myStuff, coolStuff));




// return not the same value
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let x = (names) => names.filter((v, i) => names.indexOf(v) === i)

console.log(x(names)); // 'John', 'Paul', 'George', 'Ringo'