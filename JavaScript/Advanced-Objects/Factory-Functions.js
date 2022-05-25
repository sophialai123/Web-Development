/* A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned. */

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    }
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'




//create a factory with two parameters
const robotFactory = (model, mobile) => {
  return {

    //add keys with the values 
    model: model,
    mobile: mobile,

    //add a method 
    beep() {
      console.log("Beep Boop");
    }


  }
};


//Use factory function by declaring a variable
//Assign the value of calling robotFactory with arguments
const tinCan = robotFactory('P-500', true);

// Call .beep() method
tinCan.beep() //return Beep Boop



/* Property Value Shorthand :
ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.
*/

function robotShort(model, mobile) {
  return {

    //the key names are the same as the parameters(values) 
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotShort('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)