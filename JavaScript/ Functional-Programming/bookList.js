// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// DO NOT change the globale variable value
function add(arr, bookName) {
  
  //assign arr equal to bookList,
  //so the global variable value do not change
  arr = bookList;
  return [...arr,bookName]
}
//console.log(add(bookList, "A Brief History of Time"))

//remove the given bookName from the array passed to it.
function remove(arr, bookName) {
  let newArr = [...arr]; // Copy the bookList array to a new array.
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}

console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"))
//the first add()function will return an array as a arugment
console.log(remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies"));