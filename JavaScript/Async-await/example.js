/* We provided a function withConstructor() which takes in a number. If the number is 0, it returns a promise that resolves to the string 'zero'. If the number is not 0, it returns a promise that resolves to the string 'not zero'. */

function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0)
  .then((resolveValue) => {
    console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
  });



/* Write an async function, withAsync() which reproduces the functionality of withConstructor(). Though your function will return a promise, it should not construct the promise using the new keyword. Instead, it should rely on the fact that an async function automatically returns a promise */
async function withAsync(num) {
  if (num === 0) {
    return ('zero');
  } else {
    return ('not zero');
  }

}



withAsync(100)
  .then((resolveValue) => {
    console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
  })




/* Handling Dependent Promises, improt functions from library.js file */
/* shopForBeans() expects no arguments and returns a promise which will resolve to a string of a bean type.
soakTheBeans() expects a bean type string as an argument and returns a promise which resolves to a boolean indicating whether or not the beans are softened.
cookTheBeans() expects a boolean as an argument and, if that value is true, returns a promise which will resolve to a string announcing that dinner is ready. */

import { shopForBeans, soakTheBeans, cookTheBeans } from "./library.js";


//create an async function that handles the three dependent promises

async function makeBeans() {

  //resolved value of shopForBeans()
  let type = await shopForBeans();


  //assigned to the resolved value of soakTheBeans() with one argument
  /* The soakTheBeans() function expects a bean type string which is exactly what the shopForBeans() function’s promise resolves to! You should pass your type variable into soakTheBeans(). */
  let isSoft = await soakTheBeans(type);

  //assigned to the resolved of cookTheBeans() with one argument
  /* The cookTheBeans() function expects a boolean which is exactly what the soakTheBeans() function’s promise resolves to! You should pass your isSoft variable into cookTheBeans() when you invoke it. */
  let dinner = await cookTheBeans(isSoft);

  console.log(dinner)

}


//Call the function
makeBeans();


/**** Handling Errors******* */
import { cookBeanSouffle } from "./library.js";

async function hostDinnerParty() {
  try {

    // assigned to the resolved value of the promise returned by cookBeanSouffle();
    let dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);

  }
  catch (error) {
    console.log(error);
    console.log('Ordering a pizza!');
  }
}


hostDinnerParty()




/*  Handling Independent Promises */

import { cookBeans, steamBroccoli, cookRice, bakeChicken } from "./library.js";

/* cookBeans(), steamBroccoli(), cookRice(), and bakeChicken(). These functions each return a promise which will resolve to a string representing a part of a meal. */


//Declare an async function, serveDinner()
async function serveDinner() {

  //assigned the return value of each promises
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();

  //log await each promise
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)

};

serveDinner()


