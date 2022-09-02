// Function that returns a string representing a cup of green tea
const preparTea = () => "greenTea";

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';


/*
pass a function and numofCups as arugments

Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/

const getTea = (prepareTeaFun,numOfCups) => {
  const teaCups = [];
  for (let cups = 1; cups <= numOfCups; cups += 1){
    //assign the function as teaCup variable
    const teaCup = prepareTeaFun();
    teaCups.push(teaCup)
  }
  return teaCups;
}

//assign it the first argument function varibale 
// and a number as seconde argument
const tea4GreenTeamFCC = getTea(preparTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);

//console.log(tea4GreenTeamFCC,tea4BlackTeamFCC)




let fixedValue = 4;
function incrementer(num) {
  //do not change the global value 
  return num += fixedValue
}

console.log(incrementer(3))