## Functional Programming Terminology
 - Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in `filter`, the callback function tells JavaScript the criteria for how to filter an array.

- Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

- The functions that take a function as an argument, or return a function as a return value, are called higher order functions

- When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

---

## Avoid Mutations and Side Effects Using Functional Programming

- One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

- Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.

```
//// The global variable
let fixedValue = 4;
function incrementer() {

  //do not change the global value 

  let newValue = fixedValue;
  return newValue +=1
}

console.log(incrementer()) //return 5
```

---
## Pass Arguments to Avoid External Dependence in a Function

- Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

```
 // The global variable
let fixedValue = 4;

//Pass an Argument
function incrementer(num) {
   return num = fixedValue +1
}
console.log(incrementer()) 

```
---
## Refactor Global Variables Out of Functions

So far, we have seen two distinct principles for functional programming:

1. Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like `const newArr = arrVar`, where `arrVar` is an array will simply create a reference to the existing variable and not a copy. So changing a value in `newArr` would change the value in `arrVar`.

2. Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.

---
## Return Part of an Array Using the slice Method

The `slice` method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The `slice` method does not mutate the original array, but returns a new one.

```
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);  // ["Dog", "Tiger"].
```

---
## Remove Elements from an Array Using slice Instead of splice
A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the `splice` method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. **If the second argument is not provided, the default is to remove items through the end**. However, the `splice` method mutates the original array it is called on. Here's an example:

```
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1);

```
Here `splice` returns the string `London `and deletes it from the `cities` array. `cities `will have the value `["Chicago", "Delhi", "Islamabad", "Berlin"]`.


The `slice` method does not mutate the original array, but returns a new one which can be saved into a variable. Recall that the `slice` method takes two arguments for the **indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array**. Using the `slice` method instead of splice helps to avoid any array-mutating side effects.

---
## Combine Two Arrays Using the concat Method
Concatenation means to join items end to end. JavaScript offers the `concat `method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to `concat`, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

`[1, 2, 3].concat([4, 5, 6]);  //return [1, 2, 3, 4, 5, 6]` 

---
## Add Elements to the End of an Array Using concat Instead of push

Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the concat method as a way to combine arrays into a new one without mutating the original arrays. Compare concat to the push method. push adds an item to the end of the same array it is called on, which mutates that array. 

---
## Use the reduce Method to Analyze Data

The `reduce` method allows for more general forms of array processing, and it's possible to show that both `filter` and `map` can be derived as special applications of `reduce`. The `reduce` method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.


The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which `reduce` is called.


In addition to the callback function, `reduce` has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

See below for an example using `reduce` on the `users` array to return the sum of all the users' ages. For simplicity, the example only uses the first and second arguments.

```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); //return 64
```

In another example, see how an object can be returned containing the names of the users as properties with their ages as values.


```
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);

//return 
{ John: 34, Amy: 20, camperCat: 10 }
```
---
## Sort an Array Alphabetically using the sort Method

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called `compareFunction`, is supplied, the array elements are sorted according to the return value of the compareFunction: If `compareFunction(a,b) `returns a value less than 0 for two elements `a` and `b`, then a will come before b. If `compareFunction(a,b)` returns a value greater than 0 for two elements `a` and `b`, then `b` will come before `a`. If `compareFunction(a,b)` returns a value equal to 0 for two elements `a` and `b`, then `a` and `b` will remain unchanged.


The sort method sorts the elements of an array according to the callback function.

```
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
//return [1, 2, 3, 4, 5]
```

```
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
//retrun  ['z', 's', 'l', 'h', 'b']
```

---
## Return a Sorted Array Without Changing the Original Array

A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

```
const globalArray = [5, 6, 3, 2, 9];

//return a new array, and not mutate the globalArray variable.
function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = []
  //use concat() to copy the arr
  return newArr.concat(arr).sort((a,b)=>a-b)
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
```
---

## Introduction to Currying and Partial Application

Arity: The number of arguments or operands a function or operation takes.

The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.

```
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2) //return 3
```

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the curried function in the example above:

```
const funcForY = curried(1);
console.log(funcForY(2)); // 3
```

Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

```
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```