/* Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. 
Example:
squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]) should return [16, 1764, 36].
squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]) should return [9, 100, 49]

 */

const squareList = arr => {
  // find the postive integers in the arr
  arr=arr.filter(num=> Number.isInteger(num) && num >=0).map(num=> num**2)

  return arr;
  // Only change code above this line
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);