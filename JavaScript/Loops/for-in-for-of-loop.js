/* 
The for...in statement iterates a specified variable over all the enumerable properties of an object.

for (variable in object){
  statement
}


The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

for (variable of object){
  statement
}
     
*/


let person = {
  fname: "Sophia",
  lname: "Lai",
  language: "JavaScript"
}

let arr = [1, 3, 5];
arr.foo = "Good day!"; //create custom iteration

//for in loop statement in object
for (let text in person) {
  //console.log(text) // return the key of the object
  console.log(person[text]) //return the value of the object
}


//for in loop statement in array
for (let i in arr) {
  console.log(i) // return index of the arr and custom arr"foo"
}


//for ... of statement in array
for (let x of arr) {
  console.log(x) // return the value in the array

}



