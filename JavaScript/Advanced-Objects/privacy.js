const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

//a side-effect of type-coercion
robot._energyLevel = "high";
robot.recharge()



//use Array methods on objects 
const GPA_BENCHMARK = 3.5;
let students = {
  1: {
    name: 'Egill Vignission',
    gpa: 3.4
  },
  2: {
    name: 'Bianca Pargas',
    gpa: 3.8
  },
  3: {
    name: 'Aisling O\'Sullivan',
    gpa: 3.4
  },
  4: {
    name: 'Sameer Fares',
    gpa: 3.9
  }
}


//filter is a method on arrays, however,we can get all the values 
//from object then use fileter function
let honorRoll = Object.values(students).filter(student => {

  console.log(Object.values(students)) //return an array of object
  return student.gpa >= GPA_BENCHMARK;
});

console.log(honorRoll);

// const string4 = new String("A String object");

// console.log(string4)