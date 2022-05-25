
const spaceship1 = {
  homePlanet: 'Earth',
  color: 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship1);

console.log(spaceship1.color) // Returns 'glorious gold'




/* Our function paintIt() permanently changed the color of our spaceship object. However, reassignment of the spaceship variable wouldn’t work in the same way: */

let spacesship2 = {
  homePlanet: 'Earth',
  color: 'red'
};


let tryReassignment = obj => {

  // reassign varible 
  obj = {
    identified: false,
    'transport type': 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};

tryReassignment(spacesship2) // The attempt at reassignment does not work.
//console.log(tryReassignment(spacesship2)) //return undefined

console.log(spacesship2);  // Still returns {homePlanet : 'Earth', color : 'red'};

spacesship2 = {
  identified: false,
  'transport type': 'flying'
}; // Regular reassignment still works.