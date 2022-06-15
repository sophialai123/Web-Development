/* Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
 
convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
Note: You may have noticed how convenient it would be to use map, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on! */

const convertToBaby = (arr) => {

  //Method 1: use map()
  // const newArray = [];
  // arr.map((value, index) => {

  //   newArray.push("baby" + " " + value);

  //   //console.log(`The index of animals array is: ${index}, the value of the animals array is: ${value}.`);
  // })
  // return newArray;


  //Method 2: use for loop

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push("baby" + " " + arr[i]);
  }
  return newArr;
}


const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 