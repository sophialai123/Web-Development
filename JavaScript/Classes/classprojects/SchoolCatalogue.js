/* School
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)
Middle
Does not include any additional properties or methods
High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)
 */


//Create Parent School Class
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;

  }


  //Create getters with all properties.
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }



  //Create a setter for numberOfStudents
  //The method should first check if the input (newNumberOfStudents) is a number

  set numberOfStudents(value) {

    value.isNaN ? console.log('Invalid input: numberOfStudents must be set to a Number.') : this._numberOfStudents = value
  }


  //create a method named quickFacts 
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school .`);
  }


  //create a static method named pickSubstituteTeacher
  //substituteTeachers parameter will take an array of strings.
  static pickSubstituteTeacher(substituteTeachers) {


    //randomly generate a whole number between 0 and one less than the length of the substituteTeachers array
    let index = Math.floor(Math.random() * (substituteTeachers.length));

    //access and return the substitute teacher at that randomly generated index.
    return substituteTeachers[index];

  }

}




//Create a child PrimarySchool Class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  //create one new getter in the PrimarySchool class.
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}


//Create a child HighSchool Class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "hight", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  //getter
  get sportsTeams() {
    return this._sportsTeams;
  }

}



//Instances of PrimarySchool
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

//Call .quickFacts() on the lorraineHansbury instance.
lorraineHansbury.quickFacts();

//Call .pickSubstituteTeacher() on School
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])


//Create a HighSchool instance 
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);


//Get the value saved to the sportsTeams property in alSmith
console.log(alSmith.sportsTeams);



/* Create a middle school class
Add more properties to each class (averageTestScores, schoolOverview, etc.)
Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools. */

class MiddleSchool extends School {
  constructor(name, numberOfStudents, averageTestScores, schoolOverview) {
    super(name, 'middle', numberOfStudents)
    this._averageTestScores = averageTestScores;
    this._schoolOverview = schoolOverview;
  }

  //getter 
  get averageTestScores() {
    return this._averageTestScores = averageTestScores;
  }

  get schoolOverview() {
    return this._schoolOverview = schoolOverview;
  }

}


class SchoolCatalog {
  constructor() {
    //create an empty array
    this._schools = [];

  }

  get schools() {
    return this._schools;
  }


  // addSchool(school) {
  //   return this._schools.push(school)
  // }

  quickFacts(x) {
    const teams = (x.sportsTeams ? `Intramural sports programs ${x.sportsTeams}` : '');
    console.log(`${x.name} educates ${x.numberOfStudents} ${x.level} school students. ${teams}`);
  }

  print() {
    this._schools.forEach(this.quickFacts);
  }



  ////use the method to get all the info
  //from extend calsses

  primaySc() {
    let newPrimay = new PrimarySchool('Lorraine', 314, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
    this.schools.push(newPrimay);
    return newPrimay
  }



  highSc() {

    let newHigh = new HighSchool('Smith', 515, ['Baseball', 'Volleyball', 'Track and Field']);
    this.schools.push(newHigh);
    return newHigh
  }

  middleSc() {

    let newMidd = new MiddleSchool('Sophia', 615, 89, "good");
    this.schools.push(newMidd)
    return newMidd
  }


}

const primay = new SchoolCatalog();
const middle = new SchoolCatalog();
const high = new SchoolCatalog();


console.log(middle.primaySc())
console.log(middle.middleSc())
console.log(high.highSc())
high.print();

