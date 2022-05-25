/* setter methods which reassign values of existing properties within an object */
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,

  //getter method, using the get keyword
  get numOfSensors() {
    if (typeof this._numOfSensors === 'number') {
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },

  //setter method, using the set keyword
  set numOfSensors(num) {

    //check to see if num is a number using the typeof operator
    if (typeof num === 'number' && num >= 0) {

      // reassign this._numOfSensors to num.
      return this._numOfSensors = num
    } else {
      console.log("Pass in a number that is greater than or equal to 0")
    }

  }
};

//setter method on robot to assign _numOfSensors to 100.
robot.numOfSensors = 100;

//check that the setter method worked
console.log(robot.numOfSensors)
