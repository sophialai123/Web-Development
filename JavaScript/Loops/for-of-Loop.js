//Iterating Through a String
const username = "sophia";

for (const char of username) {
  console.log(char);// return each letter in the username
};




//The break statement can be used to jump out of a loop. 
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird', 'Parotia', 'Kakapo'];

for (const bird of strangeBirds) {
  if (bird === "Basan") {
    break;
  }
  //the array until it encounters the great mythical Basan, then it will exit. 
  console.log(bird); // only return Shoebill and Cockatrice
}



//The continue statement is used to skip one iteration of the loop
const strangeBird = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];

for (const bird of strangeBird) {
  if (bird === "Cow") {
    continue;
  }
  console.log(bird); // will skip the "Cow" and continue to loop through
}


// Code Challenge
const spellingWord = 'hippopotamus';

for (const word of spellingWord) {
  console.log(word); // return each letter;
}



/* Write a for...of loop that iterates through our pokemonList array.

Inside the block of the for...of loop, use console.log() and string interpolation as modeled above to log each element in the pokemon array within the string 'You caught a 'X'!' For example, the first iteration of the loop should print ‘You caught a Pikachu!’ to the console.

One of the elements, 'Yoshi', is not a Pokemon. If you encounter 'Yoshi', use continue to skip this element before it is logged to the console. */

const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

for (const X of pokemonList) {

  if (X === "Yoshi") {
    continue;
  }
  console.log(`You caught a ${X}!`)

}
