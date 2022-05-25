function sumTwoSmallestNumbers(numbers) {

  for (let i = 0; i < numbers.length; i++) {
    //find the smallest num in the array
    smNum = Math.min(...numbers)

    // remove the smallest num and return a new array
    numbers.splice(numbers.indexOf(smNum), 1)
    // console.log(numbers)

    //find the second smallest num 
    secondSmNum = Math.min(...numbers)
    return secondSmNum + smNum
  }

}


//anlternative solution
/* https://www.w3schools.com/js/js_array_sort.asp
When the sort() function compares two values, it sends the values to 
the compare function, and sorts the values according to the returned (negative, zero, positive) value.

*/
const sumTwo = num => {
  num = num.sort((a, b) => {
    //console.log(a - b)
    return (a - b)//compare function

  })
  return num[0] + num[1]
}



console.log(sumTwo([5, 8, 12, 19, 22]), 13, "Sum should be 13");
console.log(sumTwo([15, 28, 4, 2, 43]), 6, "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, "Sum should be 16");