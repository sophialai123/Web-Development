/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods */

const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};


/* The Object.keys() method returns an array of a given object's own enumerable property names, 
iterated in the same order that a normal loop would. */
const robotKeys = Object.keys(robot);
console.log(robotKeys);


/* Object.entries() will also return an array, but the array will contain more arrays(nested arrays) that
 have both the key and value of the properties in an object. */
const robotEntries = Object.entries(robot)
console.log(robotEntries);



/* The Object.assign() method copies all enumerable own properties from one or more source objects
 to a target object. It returns the modified target object. 
 Syntax:
 Object.assign(target, ...sources)
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
const newRobot = Object.assign({ laserBlaster: true, voiceRecognition: true });
console.log(newRobot);





const circle = {
  radius: 1,
  //create a method
  draw() {
    console.log("draw a circle");
  }

}
//copy an object use .assign(), first argument is an empty object
const newObject = Object.assign({}, circle)
console.log(newObject)

//pass a new object in the first argument will add into the object
const newObject2 = Object.assign({ color: "blue" }, circle)
console.log(newObject2)



//use spread operator 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const spreadObject = { ...circle }
console.log(spreadObject)

