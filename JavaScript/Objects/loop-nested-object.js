let spaceship = {
  captain: {
    name: 'Lily',
    degree: 'Computer Engineering',
    cheerTeam() { console.log('You got this!') }
  },
  officer: {
    name: 'Dan',
    degree: 'Aerospace Engineering',
    agree() { console.log('I agree, captain!') }
  },
  medic: {
    name: 'Clementine',
    degree: 'Physics',
    announce() { console.log(`Jets on!`) }
  },
  translator: {
    name: 'Shauna',
    degree: 'Conservation Science',
    powerFuel() { console.log('The tank is full!') }
  }
};


let spaceships = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
    }
  },
  engine: {
    model: "Nimbus2000"
  }
};


//Loop throgh those two objects
function getValues(obj) {
  for (const key in obj) {
    // loop through if the key is an object
    if (typeof obj[key] === "object") {
      //console.log("This is an object ")

      //loop through nested object
      let innerObj = obj[key];
      for (const key in innerObj) {
        console.log(`The innerObject key is: ${key}, and the value is: ${innerObj[key]}`)
      }
    } else {
      console.log(`${key}: ${obj[key]}`)
    }
  }

}


//getValues(spaceship);
//getValues(spaceships);


/* Recursion is a process of calling itself.
A function that calls itself is called a recursive function. 
 */
// function recusionSolution(obj) {
//   for (const key in obj) {
//     if (typeof key === "object") {
//       //return itself if it is true
//       recusionSolution(obj[key])
//     } else {
//       return obj;
//     }
//   }
// }


function recusionSolution(obj) {

  if (typeof key === "object") {
    for (const key in obj) {
      //return itself if it is true
      recusionSolution(obj[key])
    }
  } else {
    console.log(obj)
  }
}
recusionSolution(spaceship);