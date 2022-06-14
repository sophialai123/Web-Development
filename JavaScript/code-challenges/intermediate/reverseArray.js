/* Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

const sentence = ['sense.','make', 'all', 'will', 'This'];
 
reverseArray(sentence); 
// Should return ['This', 'will', 'all', 'make', 'sense.']; */


const reverseArray = sentence => {

  // Method1: The reverse() method reverses an array
  // return sentence.reverse();


  //Method2: Looping in Reverse
  const newArry = [];

  for (let i = sentence.length - 1; i >= 0; i--) {
    newArry.push(sentence[i]);
  }
  return newArry;


}




const sentence = ['sense.', 'make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];





function reverseSentence(sentences) {

  const newArr = [];

  //Method3: use the .unshift() method.
  for (let k = 0; k < sentences.length; k++) {
    newArr.unshift(sentences[k]);
  }
  return newArr;

}

const sentences = ['sense.', 'any', 'make', 'not', 'does', 'This'];
console.log(reverseSentence(sentences));