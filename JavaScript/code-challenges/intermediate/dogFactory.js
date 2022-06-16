/* Write a function, dogFactory(). It should:

have 3 parameters: name, breed, and weight (in that order)
expect name and breed to be strings
expect weight to be a number
return an object
have each of those parameters as keys on the returned object returned with the values of the arguments that were passed in
dogFactory('Joe', 'Pug', 27)
// Should return { name: 'Joe', breed: 'Pug', weight: 27 } */

const dogFactory = (name, breed, weight) => {

  //return an object
  return {
    _name: name,
    _breed: breed,
    _weight: weight,


    //Add getters for each of the three properties and change the property names to have an underscore prepended
    get name() {
      return this._name;
    },

    get breed() {
      return this._breed;
    },

    get weight() {
      return this._weight;
    },

    //Add setters Setter must have exactly one formal parameter.
    //When we use the setter method,do not need to be called with a set of parentheses. Syntactically, it looks like we’re reassigning the value of a property
    set name(newName) {
      return this._name = newName;
    },

    set breed(newBreed) {
      return this._breed = newBreed;
    },

    set weight(newWeight) {
      return this._weight = newWeight;
    },


    // add two methods
    bark() {
      return 'ruff! ruff!'
    },

    //increment the weight property by 1.
    eatTooManyTreats() {
      return this._weight++;
    }

  }

}

console.log(dogFactory('Joe', 'Pug', 27))