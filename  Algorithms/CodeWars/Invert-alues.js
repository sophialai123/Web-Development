/* ven a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list. 
Math.abs(num) => Always positive
-Math.abs(num) => Always negative
*/


const invert = array => {
  return array.map(num => {
    if (num === 0) {
      return -num;
    } else if (num > 0) {
      return -Math.abs(num)
    } else if (num < 0) {
      return Math.abs(num)
    }
  })

}

console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);



//Another solution??? what if x is 0?
function inverts(array) {
  return array.map(x => x === 0 ? x : -x);
}

console.log(inverts([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);