// Access HTML elements

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

/* Step 1: Create varaibles for the doorImages */
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

/* Step 2: Create button varaible to display game result:
Below the variables containing the door images. */
let startButton = document.getElementById('start');


/* Step 3: Checking Doors if the door that the player clicked on is closed.
This is to make sure that clicking on already opened doors 
will not affect the progress of the game.
*/
const isClicked = door => door.src === closedDoorPath ? true : false;


/*  Step 4:Checking if the src property of door is equal to botDoorPath.*/
const isBot = door => door.src === botDoorPath ? true : false;


/*Step 5: Writing Play and Game Over Logic
 Create a function to display a game over message depending on whether the player has won or lost. 
*/
const gameOver = status => {

  status === "win" ? startButton.innerHTML = "Yon win! Play again?" : startButton.innerHTML = "Game over! Play again?";

  //restart the button to a new game;
  currentlyPlaying = false;
}

/* Step 6:
Create a function called playDoor that takes door as its parameter. 
Inside the function, decrement numClosedDoors by one. 
This will decrease the value of the numClosedDoors variable by one every
time a door is opened.
calling the gameover function with status === " win";
Calling isBot with the argument with door returns true */

const playDoor = door => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    return gameOver("win")
  } else if (isBot(door) === true) {
    return gameOver();
  }
}

/* Step 7: Choosing a Random Chore Door 
We will use this function to randomize which door ChoreBot will hide behind.
First, create an if conditional to check if choreDoor equals 0. 
If the condition is true, set openDoor1 to botDoorPath 
(the ChoreBot will hide in the first door!), 
openDoor2 to beachDoorPath, and openDoor3 to spaceDoorPath.
*/

const randomChoreDoorGenerator = () => {
  //set it to a random integer between 0 and numClosedDoors
  let choreDoor = Math.floor(Math.random() * numClosedDoors)
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}

/* Step 8: Starting the Game
We’ve got some more variables to reset to ensure that players can start with a fresh slate.
Set numClosedDoors back to 3, currentlyPlaying to true, and the content of startButton element 
to 'Good Luck!'.*/

const startRound = () => {

  //set the src properties of doorImages are closed at the start of the game.
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath

  //reset to ensure that players can start with a fresh slate
  numClosedDoors = 3;
  currentlyPlaying = true;

  //reset the content of startButton element to 'Good Luck!'
  startButton.innerHTML = "Good Luck!";

  //Call the randomChoreDoorGenerator() function
  randomChoreDoorGenerator();

}

//get the game started—call the startRound()
startRound()