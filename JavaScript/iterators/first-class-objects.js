//Assign a function to a variable originalFunc
const originalFunc = (num) => { return num + 2 };

//Re-assign the function to a new variable newFunc
const newFunc = originalFunc;

//Access the function's name property
newFunc.name;   //'originalFunc'
// console.log(newFunc.name.length)// 12

//Return the function's body as a string
//The toString() method returns a string representing the object.

newFunc.toString(); //'(num) => { return num + 2 }'
console.log(newFunc(5)) // output 7

//Add our own isMathFunction property to the function
newFunc.isMatchFunction = true;

//Pass the function as an argument
const functionNameLength = (func) => { return func.name.length };
console.log(functionNameLength(originalFunc)) //output:12 the lenth of newFunc = originalFunc

//Return the function
const returnFunc = () => { return newFunc }
console.log(returnFunc())



const K = new Object().toString()
console.log(K)