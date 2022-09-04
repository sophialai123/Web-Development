const str = "Hello World";
const bySpace = str.split(" ");
console.log(bySpace)

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
console.log(byDigits)

/* split str into an array of words. 
The function should return the array.
 Note that the words are not always separated 
 by spaces, and the array should not contain punctuation. */

 function splitify(str) {
  // another solution
  //  let regex = /[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/
  //  return str.split(regex)
   
   /* /\W/ Matches any non-word character. 
   This includes spaces and punctuation, 
   but not underscores. 
   It’s equivalent to /[^A-Za-z0-9_]/. */
  return str.split(/\W/);


  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));