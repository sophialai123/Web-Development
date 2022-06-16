/* In the next few exercises, you will create two subclasses (Doctor and Nurse) from a parent class named HospitalEmployee. Below, we have listed the properties and methods you will find in the Doctor and Nurse classes.

Doctor
Properties: _name, _remainingVacationDays (set to 20 inside the constructor()), _insurance
Methods: .takeVacationDays()
Nurse
Properties: _name, _remainingVacationDays (set to 20 inside constructor()), _certifications
Methods: .takeVacationDays(), .addCertification()
In main.js, create a parent class named HospitalEmployee. Add a constructor with name as an argument. */




// creating a parent class named HospitalEmployee.
class HospitalEmployee {

  //create constructor
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  //create getter properties.
  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }


  //create methods
  takeVacationDays(daysOff) {

    //subtract daysOff from _remainingVacationDays. Save the result to _remainingVacationDays.
    this._remainingVacationDays -= daysOff;

  }

}



