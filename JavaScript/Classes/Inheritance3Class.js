
// Parent class HospitalEmployee
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }


  //create getters
  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  //create methods
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff
  }

}



//create the Nurse class as a child of the HospitalEmployee class. use extends keyword

class Nurse extends HospitalEmployee {

  //create a constructor() that accepts two arguments. 
  constructor(name, certifications) {

    //call the parent’s constructor method and pass the appropriate value(s).
    super(name);

    //under super, set _certifications
    this._certifications = certifications;

  }



  //create a static method called generatePassword

  static generatePassword() {

    //this method should return a random integer between zero and 10,000.
    return Math.floor(Math.random() * 10000);

  }


  //Create own getter
  get certifications() {
    return this._certifications;
  }



  //Create own Methods:
  addCerification(newCertification) {

    //add the newCertification value to the nurse’s certifications array.
    this._certifications.push(newCertification);

  }
}

//create a new instance of Nurse and save it to a constant variable named nurseOlynyk
const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);


//Call .takeVacationDays() from the parent calss with an input of 5 on your nurseOlynyk instance.
nurseOlynyk.takeVacationDays(5);

//log the value saved to the remainingVacationDays property in nurseOlynyk.
console.log(nurseOlynyk.remainingVacationDays);


//call the .addCertification()
nurseOlynyk.addCerification('Genetics');

//Log the value saved to the certifications property
console.log(nurseOlynyk.certifications);
