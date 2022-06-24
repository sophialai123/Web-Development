# **Promise**
#### Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:

1. Pending: The initial state— the operation has not completed yet.
   
2. Fulfilled (resolved): The operation has completed **successfully** and the promise now has a **resolved** value. For example, a request’s promise might resolve with a JSON object as its value.
   
3. Rejected: The operation has failed and the promise has a reason for the **failure**. This reason is usually an **Error** of some kind.
---

## Constructing a Promise Object
- To create a new Promise object, we use the new keyword and the Promise constructor method:
```
 const executorFunction = (resolve, reject) => { };
 const myFirstPromise = new Promise(executorFunction);

```
- The Promise constructor method takes a function parameter called the executor function which runs automatically when the constructor is called.
  
- The executor function generally starts an asynchronous operation and dictates how the promise should be settled.

- The executor function has two function parameters, usually referred to as the resolve() and reject() functions.
  - **resolve** is a function with one argument. Under the hood, if invoked, resolve() will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into resolve().

  - **reject** is a function that takes a reason or error as an argument. Under the hood, if invoked, reject() will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject().
  
- Let’s look at an example executor function in a Promise constructor:
```
 const executorFunction = (resolve, reject) => {
   if (someCondition) {
      resolve('I resolved!');
   } else {
      reject('I rejected!'); 
   }
 }
 const myFirstPromise = new Promise(executorFunction);
```
- Let’s break down what’s happening above:
   - We declare a variable myFirstPromise
   - myFirstPromise is constructed using new Promise() which is the Promise constructor method.
   - executorFunction() is passed to the constructor and has two functions as parameters: resolve and reject.
   - If someCondition evaluates to true, we invoke resolve() with the string 'I resolved!'
   - If not, we invoke reject() with the string 'I rejected!'
---

## The Node setTimeout() Function
- setTimeout() is a Node API (a comparable API is provided by web browsers) that uses callback functions to schedule tasks to be performed after a delay.
  
- setTimeout() has two parameters: a callback function and a delay in milliseconds.

```
 const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
 };
 
 setTimeout(delayedHello, 2000);
```
- Here, we invoke setTimeout() with the callback function delayedHello() and 2000.
  
- Let’s look at how we’ll be using setTimeout() to construct asynchronous promises:
```
  const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
 };
 

 //returned a promise.
 const prom = returnPromiseFunction();

```
---

## Consuming Promises
- Promise objects come with an aptly named .then() method.

- .then() is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as handlers. 
  
- When the promise settles, the appropriate handler will be invoked with that settled value.
  
- The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.
  
- The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.

- One important feature of .then() is that it always returns a promise. 
  
---

## Success and Failure Callback Functions
- To handle a “successful” promise, or a promise that resolved, we invoke .then() on the promise, passing in a success handler callback function:

```
 const prom = new Promise((resolve, reject) => {
   resolve('Yay!');
 });
 
 const handleSuccess = (resolvedValue) => {
   console.log(resolvedValue);
 };
 
 prom.then(handleSuccess); // Prints: 'Yay!'
```
---

## Using catch() with Promises
- The .catch() function takes only one argument, onRejected.
  
- In the case of a rejected promise, this failure handler will be invoked with the reason for rejection. 

- We pass a success handler to .then() and a failure handler to .catch().
```
 prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

```
---
## Chaining Multiple Promises
- One common pattern we’ll see with asynchronous programming is multiple operations which depend on each other to execute or that must be executed in a certain order. 
  
- Promises are designed with composition in mind! Here’s a simple promise chain in code
  
```
firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
```
- Let’s break down what’s happening in the example:

  - We invoke a function firstPromiseFunction() which returns a promise.
  - We invoke .then() with an anonymous function as the success handler.
  - Inside the success handler we return a new promise— the result of invoking a second function, secondPromiseFunction() with the first promise’s resolved value.
  - We invoke a second .then() to handle the logic for the second promise settling.
  - Inside that .then(), we have a success handler which will log the second promise’s resolved value to the console.
  
---
## Using Promise.all()
- Promise.all() accepts an array of promises as its argument and returns a single promise. That single promise will settle in one of two ways:
  
  1. If every promise in the argument array resolves, the single promise returned from Promise.all() will resolve with an array containing the resolve value from each promise in the argument array.
   
  2. If any promise from the argument array rejects, the single promise returned from Promise.all() will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.

```
 let myPromises = Promise.all([returnsPromOne(),  returnsPromTwo(), returnsPromThree()]);
 
 myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });

```
- We declare myPromises assigned to invoking Promise.all().

- We invoke Promise.all() with an array of three promises— the returned values from functions.

- We invoke .then() with a success handler which will print the array of resolved values if each promise resolves successfully.
  
- We invoke .catch() with a failure handler which will print the first rejection message if any promise rejects.
  
---
## **Review**

- Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
  
- Promises can be in one of three states: pending, resolved, or rejected.
  
- A promise is settled if it is either resolved or rejected.
  
- We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
  
- setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
  
- We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
  
- We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
  
- Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
  
- To use promise composition correctly, we have to remember to return promises constructed within a .then().
  
- We should chain multiple promises rather than nesting them.
To take advantage of concurrency, we can use Promise.all().