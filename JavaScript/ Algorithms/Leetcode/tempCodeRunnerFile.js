// var twoSum = function (nums, target) {
//   let newArray = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (target === nums[i] + nums[j]) {
//         index1 = nums.indexOf(nums[i])
//         index2 = nums.indexOf(nums[j])

//         newArray.push(index1, index2)
//       }
//     }
//     return newArray
//   }

// };




function bruteForceTwoSum(array, sum) {
  let nums = []

  let prevNums = []

  for (let x in array) {
    for (let y in array) {
      if (array[x] + array[y] === sum) {
        if (!!nums.length) {
          if (!prevNums.includes(array[x]) && !prevNums.includes(array[y])) {
            prevNums.push(array[x])
            nums.push([array[x], array[y]])
          }
        } else {
          nums.push([array[x], array[y]])
          prevNums.push(array[x])
        }
      }
    }
  }
  return nums
}


console.log(bruteForceTwoSum([3, 2, 4], 6))