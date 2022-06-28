function one() {
  return 10 + 30
}

function two() {
  return 20 + 20

}


function three() {
  return 30 + 10
}


function four() {

  return one() + two() + three();

}


console.log(four())


console.log("I'm learning about");

for (let idx = 0; idx < 999999999; idx++) { }

// The second console.log() statement is
// delayed by the for loop's execution
console.log("the Event Loop");



