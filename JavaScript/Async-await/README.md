# ASYNC AWAIT

- The async...await syntax allows us to write asynchronous code that reads similarly to traditional synchronous, imperative programs.

---
## The async Keyword
- The async keyword is used to write functions that handle asynchronous actions. We wrap our asynchronous logic inside a function prepended with the async keyword. Then, we invoke that function.
```
  async function myFunc() {
  // Function body here

  };

myFunc();
```
- We’ll be using async function declarations throughout this lesson, but we can also create async function expressions:
```
const myFunc = async () => {
  // Function body here
};
 
myFunc();
```
- async functions always return a promise.
- This means we can use traditional promise syntax, like .then() and .catch with our async functions.
- An async function will return in one of three ways: 
  - If there’s nothing returned from the function, it will return a promise with a resolved value of **undefined**.
  - If there’s a non-promise value returned from the function, it will return a promise resolved to that value.
  - If a promise is returned from the function, it will simply return that promise

```
 async function fivePromise() { 
  return 5;
}
 
fivePromise()
.then(resolvedValue => {
    console.log(resolvedValue);
  })   // Prints 5
```
- In the example above, even though we return 5 inside the function body, what’s actually returned when we invoke fivePromise() is a promise with a resolved value of 5.

---

## The await Operator
- async functions are almost always used with the additional keyword await inside the function body.

- The await keyword can only be used inside an async function. await is an operator: it returns the resolved value of a promise.
  
- Since promises resolve in an indeterminate amount of time, await halts, or pauses, the execution of our async function until a given promise is resolved.
  
- We can await the resolution of the promise it returns inside an async function. In the example below, myPromise() is a function that returns a promise which will resolve to the string "I am resolved now!".

```
 async function asyncFuncExample(){
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}
 
asyncFuncExample(); // Prints: I am resolved now!
```
- Within our async function, asyncFuncExample(), we use await to halt(stop) our execution until myPromise() is resolved and assign its resolved value to the variable resolvedValue. Then we log resolvedValue to the console. We’re able to handle the logic for a promise in a way that reads like synchronous code
  
---
## Writing async Functions
- We’re going to explore this using the following function, which returns a promise that resolves to 'Yay, I resolved!' after a 1 second delay:
  
```
let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}
```

- Now we’ll write two async functions which invoke myPromise():
  
```
async function noAwait() {
 let value = myPromise();
 console.log(value);
}
 
async function yesAwait() {
 let value = await myPromise();
 console.log(value);
}
 
noAwait(); // Prints: Promise { <pending> }
yesAwait(); // Prints: Yay, I resolved!
```

- In the first async function, noAwait(), we left off the await keyword before myPromise().
  
- In the second, yesAwait(), we included it. 
  
- The noAwait() function logs Promise { pending } to the console. Without the await keyword, the function execution wasn’t paused. The console.log() on the following line was executed before the promise had resolved.
  
- Remember that the await operator returns the resolved value of a promise. When used properly in yesAwait(), the variable value was assigned the resolved value of the myPromise() promise, whereas in noAwait(), value was assigned the promise object itself.
  
--- 
## Handling Dependent Promises
- With native promise syntax, we use a chain of .then() functions making sure to return correctly each one:

```
 function nativePromiseVersion() {
  returnsFirstPromise()
    .then((firstValue) => {
      console.log(firstValue);
      return returnsSecondPromise(firstValue);
    })
   .then((secondValue) => {
      console.log(secondValue);
    });
}
```
- Let’s break down what’s happening in the nativePromiseVersion() function:

  - Within our function we use two functions which return promises: returnsFirstPromise() and returnsSecondPromise().
   
  - We invoke returnsFirstPromise() and ensure that the first promise resolved by using .then().
  
  - In the callback of our first .then(), we log the resolved value of the first promise, firstValue, and then return returnsSecondPromise(firstValue).
  
  - We use another .then() to print the second promise’s resolved value to the console.

- Here’s how we’d write an async function to accomplish the same thing:
  
```
 async function asyncAwaitVersion() {
  let firstValue = await returnsFirstPromise();
  console.log(firstValue);
  let secondValue = await returnsSecondPromise(firstValue);
  console.log(secondValue);
}
```
- Let’s break down what’s happening in our asyncAwaitVersion() function:

  - We mark our function as async.
  
  - Inside our function, we create a variable firstValue assigned await returnsFirstPromise(). This means firstValue is assigned the resolved value of the awaited promise.
  
  - Next, we log firstValue to the console.

  - Then, we create a variable secondValue assigned to await returnsSecondPromise(firstValue). Therefore, secondValue is assigned this promise’s resolved value.
  
  - Finally, we log secondValue to the console.