let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below, contain a method .retreat() 
const alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  //adding second method .takeOff()
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!")
  }
};


//Invoke (call) your two methods: first .retreat() then .takeOff().
alienShip.retreat();
alienShip.takeOff();