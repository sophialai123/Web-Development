/* Getters are methods that get and return the internal properties of an object. */
const person = {
  _firstName: 'John',
  _lastName: 'Doe',

  //use the get keyword followed by a function.
  get fullName() {

    //making sure they both return truthy values 
    //use this to call objects
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
// getter methods do not need to be called with a set of parentheses.Syntactically, it looks like we’re accessing a property.
person.fullName; // 'John Doe'
console.log(person.fullName)


//getter example
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    //use the typeof operator on a variable will return a string that contains the name of the data type
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${this._energyLevel}`
    } else {
      return "System malfunction: cannot retrieve energy level";
    }

  }

};

console.log(robot.energyLevel)
