## Higher-order functions
#### Functions as Data
- JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.
```
 const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};
```
- Let’s pretend this function does important work and needs to be called repeatedly. To rename this function without sacrificing the source code, we can re-assign the function to a variable with a suitably short name:
```
 const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!
```
- busy is a variable that holds a reference to our original function. If we could look up the address in memory of busy and the address in memory of announceThatIAmDoingImportantWork they would point to the same place. 

---
## Iterators taks call back functions

- .forEach() is used to execute the same code on every element in an array but **DO NOT** change the array and returns "underfind".
```
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit =>{
  console.log(`I want to eat a ${fruit}`)
})

//return Output:
I want to eat a mango
I want to eat a papaya
I want to eat a pineapple
I want to eat a apple
```

- .map() executes the same code on every element n an array and returns **a new array with the updated elements**.
  
```
const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
}); 

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
```

- .filter() checks every element in an array to see if its meets certain criteria and **returns a new array** with elements that **return truty for the criteria** 

```
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

//a new array. 
const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

```

- .findIndex() on an array will return the **index of the first element** that evaluates to **true** in the callback function. It **returns -1 if none of the element in the array satifies the condition.**

```
const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});

//the index of 3 is less than 10
console.log(lessThanTen); // Output: 3 

//the element has index of 3:
console.log(jumbledNums[3]); // Output: 5


//If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
 
console.log(greaterThan1000); // Output: -1
```


- reduce() iterates throught an array and takes the values of the elements and **returns a signle value.**

```
const numbers = [1, 2, 4, 10];


const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 
console.log(summedNums) // Output: 17
```
  

- The .reduce() method can also take an optional second parameter to **set an initial value** for accumulator (remember, the first argument is the callback function!). For instance:

```
const numbers = [1, 2, 4, 10];
 
//accumulator starts with 100 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums); // Output: 117

```

- The some() method tests whether **at least one element** in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

```
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// check if there are words that are fewer than 6 characters
console.log(words.some((word) => {
  return word.length < 6;
}));

//output:
true

```

- The every() method tests **whether all elements** in the array pass the test implemented by the provided function. It returns a Boolean value.

```
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true


```