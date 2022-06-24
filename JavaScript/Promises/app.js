
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Create a Promise constructor.:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
};


//Function returns a new promise constructed by passing your myExecutor() function into the Promise constructor.
const orderSunglasses = () => {
  return new Promise(myExecutor);
}


//assigned to the returned value of your orderSunglasses() function.
const orderPromise = orderSunglasses();

console.log(orderPromise);



/* The Node setTimeout() Function */

console.log("This is the first line of  setTimeout code in app.js.");
// Keep the line above as the first line of code
// Write your code here:


const usingSTO = () => {
  console.log("This line of code will log to the console last.");
};

setTimeout(usingSTO, 1000);//deplay for one second


// Keep the line below as the last line of code:
console.log("This is the last line of  setTimeout code in app.js.");

/* Success and Failure Callback Functions */
import { checkInventory } from './library.js';

//checkInventory() takes in an array representing an order and returns a promise.
const order = [['sunglasses', 1], ['bags', 2]];


const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}


const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
}


/* Invoke checkInventory() with order. This will return a promise. Attach a .then() function to this. Pass into .then() the two handlers you wrote as callback functions. */
checkInventory(order).then(handleSuccess, handleFailure)


/* We pass a success handler to .then() and a failure handler to .catch(). */
checkInventory(order).then(handleSuccess).catch(handleFailure)

