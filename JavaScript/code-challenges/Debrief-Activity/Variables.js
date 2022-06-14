//Check Point 1 - Variables and Comparisons

const myFruit = "apple";
const amountOfApples = 5;

if (amountOfApples === 5) {
  console.log(`We have ${amountOfApples} ${myFruit}!`);
}



const myFruits = "watermelon";
const priceOfMelon = 99;

if (priceOfMelon >= 99) {
  console.log("The price of melons are less than 1 dollar per Kg!")
} else {
  console.log("Please enter an valid num!")
}



// Check Point 2 - If / Else
var num = 20;

if (num < 20) {
  console.log("Your number is less than 20.")
} else {
  console.log("Your number is greater than or equal to 20.")
};


//Check Point 3 - Advanced If / Else and Refactoring If / Else!

//Use an if and else statement to determine the greater of two numbers a = 10; b=50; 
let a = 10;
let b = 50;

if (a !== b) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`)
  } else {
    console.log(`${a} is less than ${b}`)
  };
} else {
  console.log(`${a} is equal to ${b}`)
}


//Declare month as a string variable and assign a value to it.Use an if and else statement to determine the season in Australia(Hint: use Logical operators).


let month = "June";

if (month === "June" || month === "July" || month === "Ausgust") {
  console.log("This is winter season.");
} else if (month === "Sep" || month === "Oct" || month === "Nov") {
  console.log("This is Spring seasone.");
} else if (month === "Dec" || month === "Jan" || month === "Feb") {
  console.log("This is Summer seasone.");
} else {
  console.log("This is Fall season");
}


//Use a switch statement to find out what to do at a set of traffic lights.

let trafficLight = 'red';

switch (trafficLight) {
  case "green":
    console.log("You should go!");
    break;
  case "red":
    console.log(" You should stop!");
    break;
  case "orange":
    console.log("you should slow down… ");
    break;
  default:
    console.log("Please enter a valid value");
    break;
}