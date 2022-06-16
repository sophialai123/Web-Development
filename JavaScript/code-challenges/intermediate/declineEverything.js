/* Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

You can test your function when you’re ready by passing in the veggies array or by making your own array! */

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
  console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = arr => {

  //use forEach to loop through the arr and past spolitelyDecline function inside
  arr.forEach(politelyDecline);

}


console.log(declineEverything(veggies));


/* Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the veggies array or by making your own array! */


const acceptEverything = arra => {

  arra.forEach(element => {
    console.log(`Ok, I guess I will eat some ${element}.`);
  })
}
acceptEverything(veggies);