/* Calculate the Mean and Mode
Create a statsFinder() function that takes in a list of numbers and returns a list containing the mean and mode, in that order. As a reminder, the mean is the average of the values and the mode is the most occurring value. If there are multiple modes, return the mode that occurs first. Make sure that you write your functions and find these answers from scratch – don’t use imported tools!

For example, statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) should return [368.75, 400]. */


function statsFinder(array) {

  // find the average num in the array
  sumeArray = array.reduce((preValue, currentValue) => {

    return preValue + currentValue;
    // return (preValue + currentValue) / (array.length);

  })

  console.log(sumeArray);

}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))


console.log((500 + 800 + 375 + 650 + 325 + 300))
