import { checkAvailability } from './library.js';


//Chain a .then() to the promise returned from Promise.all(). 
//pass in onFulfill to serve as the success handler.
const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

//Add a .catch() to pass in onReject to serve as the failure handler.
const onReject = (rejectionReason) => {
  console.log(rejectionReason);
};

// Create three variables each assigned to a separate promise:
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.')
const checkPants = checkAvailability('pants', 'Favorite Supply Co.')
const checkBags = checkAvailability('bags', 'Favorite Supply Co.')


//Invoke Promise.all() with an array containing separate promise
Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject)