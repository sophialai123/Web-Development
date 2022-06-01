

const twoSum = (nums, target) => {

  for (let x = 0; nums.length; x++) {

    // Not comparing to the same index: x + 1
    for (let y = x + 1; nums.length; y++) {
      if (nums[x] + nums[y] === target) {
        console.log([x, y])

      }
    }
  }

};

console.log(twoSum([3, 2, 4], 6));