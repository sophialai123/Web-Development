
/* slice method takes two arguments for 
the indices to begin and end the slice 
(the end is non-inclusive), */
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0,3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));






/* If the second argument is not provided,
 the default is to remove items through the end */
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3);//remove items from index 3 to the end
//console.log(cities)