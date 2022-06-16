/* Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

{name: 'cabbage', source: 'plant' }
and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];
 
isTheDinnerVegan(meal); // Should return true */



// return false if one of the items is not true;
const isTheDinnerVegan = arr => arr.every((food => food.source === "plant"));




const dinner = [{ name: 'hamburger', source: 'meat' }, { name: 'cheese', source: 'dairy' }, { name: 'ketchup', source: 'plant' }, { name: 'bun', source: 'plant' }, { name: 'dessert twinkies', source: 'unknown' }];

console.log(isTheDinnerVegan(dinner))
// Should print false