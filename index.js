const prompt = require('prompt-sync')();
const c = require('ansi-colors');
/*
code will go here
*/

const checkWinner = (a, b) => {
  if (a == undefined || b == undefined) {
    throw "This function requires two arguments!";
  } else if (typeof a != "string" || typeof b != "string") {
    throw "Arguments must be strings!";
  } else {
    if ((a == "rock" && b == "scissors") || (a == "scissors" && b == "paper") || (a == "paper" && b == "rock")) {
      return "a"; // a wins
    } else if ((b == "rock" && a == "scissors") || (b == "scissors" && a == "paper") || (b == "paper" && a == "rock")) {
      return "b"; // b wins
    } else {
      return "draw"; // a and b are the same or invalid inputs
    }
  }
};

const getComputerChoice = () => {
  const arr = ["rock", "paper", "scissors"];
  const computerChoice = arr[Math.floor(Math.random() * arr.length)];
  return computerChoice
}

const getUserChoice = () => {
  let userChoice;
  const accepted = ["rock", "paper", "scissors", "r", "p", "s"];
  do {
    userChoice = prompt('Choose: rock(r), paper(p) or scissors(s)? :   ');
    if (!accepted.includes(userChoice)) {
      console.log("Invalid choice. Please choose rock, paper, or scissors.");
    }
  } while (!accepted.includes(userChoice));

  if (userChoice === "r") {
    userChoice = "rock";
  } else if (userChoice === "p") {
    userChoice = "paper";
  } else if (userChoice === "s") {
    userChoice = "scissors";
  } else {
    //pass
  }
  return userChoice;
};


const mainLoop = () => {
  let userScore = 0;
  let computerScore = 0;
  let userInput = "p";
  console.log("Welcome to rock paper scissors in Javascript!");
  while (userInput === "p") {
    
    console.log("")
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    const winner = checkWinner(userChoice, computerChoice);
    if (winner === "a") {
      console.log(c.green(`${userChoice} vs ${computerChoice}, you win!`));
      userScore += 1;
    } else if (winner === "b") {
      console.log(c.red(`${userChoice} vs ${computerChoice}, you lose..`));
      computerScore += 1;
    } else {
      console.log(c.yellow("A draw.."));
    }
    console.log(`Your score: ${userScore}`);
    console.log(`Computer's score: ${computerScore}`);
    userInput = prompt('Press p to play again:   ');
  }
  console.log("");
  if (userScore > computerScore) {
    console.log(c.bgGreen(`You won the series!  ${userScore}:${computerScore}`));
  } else if (computerScore > userScore) {
    console.log(c.bgRed(`Computer won the series  ${computerScore}:${userScore}`));
  } else {
    console.log(c.bgYellow(`The series was a draw  ${userScore}:${computerScore}`));
  }
};

mainLoop();


module.exports = { checkWinner };