/* In destructured assignment we create a variable with the name of an object’s key 
that is wrapped in curly braces { } and assign to it the object. */

const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

//normal way
const residence = vampire.residence;
console.log(residence); // Prints 'Transylvania' 


//use destructured assignment to grab nested properties 
const { day } = vampire.preferences
console.log(day)





//Another example
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

//Use destructured assignment extracts the functionality property of robot.
const { functionality } = robot;

//Since functionality is referencing robot.functionality
//call the methods available to robot.functionality
functionality.beep()