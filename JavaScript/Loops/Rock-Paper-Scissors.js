
const getUserChoice = (userInput) => {

  userInput = userInput.toLowerCase();

  if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
    return userInput
  } else {
    console.log("This is an error")
  }

}

console.log(getUserChoice("scissors"))


const getComputerChoice = () => {

  randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      return "Error";
      break;
  }

}


getComputerChoice()
rock = Math.floor(Math.random() * 3)
paper = Math.floor(Math.random() * 3)
scissors = Math.floor(Math.random() * 3)


console.log(rock)
console.log(paper)
console.log(scissors)


const determineWinner = (userChoice, computerChoice) => {

  if (computerChoice === userChoice) {
    return "This is a tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won"
    }
  } else {
    return "User won"
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won"
    }
  } else {
    return "User won"
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won"
    }
  } else {
    return "User won"
  }






}

console.log(determineWinner("scissors", "paper"))

const playGame = () => {
  const userChoice = getUserChoice("rock")
  const computerChoice = getComputerChoice()
  console.log('You threw: ' + userChoice)
  console.log('The computer threw: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))

}
playGame()

