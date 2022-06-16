
class Surgeon {

  //Create constructor with underscores_ properties should not be accessed directly.
  constructor(name, department) {
    this._name = name;
    this._department = department;

    //add a property named _remainingVacationDays and set it equal to 20.
    this._remainingVacationDays = 20;
  }


  //create a getter called name returns the value saved to _name.
  get name() {
    return this._name;
  }


  //create a getter called department that returns the value saved to _department.
  get department() {
    return this._department;
  }

  //create a getter called remainingVacationDays that returns the value saved to _remainingVacationDays.
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }


  //create a method called takeVacationDays that accepts one argument named daysOff.

  takeVacationDays(daysOff) {

    //Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.
    this._remainingVacationDays -= daysOff;

  }


}


// Create an instance of the Surgeon class  constant variable called surgeonRomero.
// need to past two properties because we create two properties
const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');


//Create an instance of the Surgeon class constant variable called surgeonJackson.
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");



//Method Calls
// print the value saved to the name property of the surgeonRomero object.
console.log(surgeonRomero.name)


//Call .takeVacationDays() on surgeonRomero, with an input of 3.
surgeonRomero.takeVacationDays(3);


//print the value saved to the remainingVacationDays property of the surgeonRomero instance.
console.log(surgeonRomero.remainingVacationDays); // return 20 - 3 = 17