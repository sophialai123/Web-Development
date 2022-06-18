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

/* Step 1: 
Let’s start by accessing the elements of the door images. At the top of script.js,
create a variable called doorImage1 and set it to the HTML element with the id of door1 . */
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

/* Step 2:
We also need to access the orange div that says “Good luck!” located under the doors on the webpage. 
Below the variables containing the door images, create a variable called startButton and set it to the HTML element with the id of start.
We will be manipulating this div in a future task to display the game result. */

let startButton = document.getElementById('start')

// Define game logic to check doors, progress game, end game, and choose a random chore door


/* Step 3: Checking Doors
First, we will create a function to check if the door that the player clicked on is closed.
This is to make sure that clicking on already opened doors will not affect the progress of the game.


Inside the isClicked() function, create a conditional that checks if the src property of door is equal 
to closedDoorPath. If the condition is truthy, return true. Otherwise, return false


*/


const isClicked = door => door.src === closedDoorPath ? true : false;



/*  Step 4:
Create a function called isBot that takes door as its parameter. Inside the function, 
create a conditional statement that checks if the src property of door is equal to botDoorPath. 
If the conditional is truthy, return true. */

const isBot = door => door === botDoorPath ? true : false;


/*Step 5: Writing Play and Game Over Logic
 Create a function to display a game over message depending on whether the player has won or lost. 
 Create a function called gameOver that takes status as its parameter. 

Inside the gameOver() function, write a conditional statement that checks if status is equal to 'win'.
If the conditional statement evaluates to a truthy value,
set the content of the startButton element to 'You win! Play again?'.
If the condition is falsy, set it to 'Game over! Play again?'
 
 
 */
const gameOver = status => {

  status === "win" ? startButton.innerHTML = "Yon win! Play again?" : startButton.innerHTML = "Game over! Play again?";
  currentlyPlaying = false;
}

/* Step 6:
Using the three functions we’ve created so far, we will write the logic for progressing the game.

Create a function called playDoor that takes door as its parameter. Inside the function, decrement numClosedDoors by one. 
This will decrease the value of the numClosedDoors variable by one every
time a door is opened. */

const playDoor = door => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    return gameOver("win")
  } else if (isBot(door) === true) {
    return gameOver();

  }

}

/* Step 7: Choosing a Random Chore Door 
What good is this game if you know where the ChoreBot is always hiding?
Create a function called randomChoreDoorGenerator. Inside the function, 
create a variable called choreDoor, and set it to a random integer between 0 and numClosedDoors.
We will use this function to randomize which door ChoreBot will hide behind.

*/

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

// Start a game round


