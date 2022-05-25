/* The this keyword references the calling object which provides access to the calling object’s properties */


//create a new object to practice using this.
const robot = {
  model: "1E78V2",
  energyLevel: 100,

  //add a method and return the information use this keyword
  //use the function expression ES6 shorthand:
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel} `
  }

}
console.log(robot.provideInfo()) //call the method



/* Arrow Functions and this ( DO NOT use This in ARROW FUNCTIONS)
The key takeaway from the example above is to avoid using arrow functions when using this in a method! */

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

//goat.diet(); // Prints undefined


//The function expression longhand format:
const goatLong = {
  name: 'Billy',
  color: 'biege',
  giveDetails: function () {
    console.log(`${this.name} is a ${this.color} goat.`)
  }
}

goatLong.giveDetails()