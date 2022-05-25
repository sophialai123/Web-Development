/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

 */


const sumMix = (x) => {

  let newArray = []
  //find string number and covert in numbers
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== "number") {
      stringNum = parseInt(x[i])

      //push all the numbers in a new array
      newArray.push(stringNum)

    }
  }

  // use reduce()function to sum all the numbers in the array
  const sumArray = newArray.reduce((previousNum, currentNum) => previousNum + currentNum)
  return sumArray;
}


console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);



//Another solution
function sumsMix(x) {

  //The unary + operator can be used to convert a variable to a number
  return x.map(a => +a).reduce((a, b) => a + b);
}

console.log(sumsMix([9, 3, '7', '3']), 22);
console.log(sumsMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumsMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);





/* 
https://www.w3schools.com/js/js_type_conversion.asp
 The unary + operator can be used to convert a variable to a number:
  let y = "5";      // y is a string
   let x = + y;      // x is a number */