/* in a try...catch statement, we evaluate code in the try block and if the code throws an error, the code inside the catch block will handle the error for us. */

//try...catch statement
try {
  throw Error("This error will get caught"); //To throw an error
} catch (e) {
  console.log(e) //The e represents the thrown error.
}

console.log('The thrown error that was caught in the try...catch statement!');


/* Handling with try...catch */
function capAllElements(arr) {
  try {
    //TypeError: arr.forEach is not a function
    arr.forEach((el, index, array) => {
      array[index] = el.toUpperCase();
    });
  } catch (e) {
    console.log(e)
  }
}

capAllElements('Incorrect argument');