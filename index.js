const prompt = require('prompt-sync')();
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
      return a; // a wins
    } else if ((b == "rock" && a == "scissors") || (b == "scissors" && a == "paper") || (b == "paper" && a == "rock")) {
      return b; // b wins
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
  let userChoice = prompt('Choose: rock(r), paper(p) or scissors(s)? :   ');
  const accepted = ["rock", "paper", "scissors", "r", "p", "s"]
  while (!accepted.includes(userChoice)) {
    userChoice = prompt('Choose: rock(r), paper(p) or scissors(s)? :   ');
  }
  if (userChoice == "r"){
    userChoice = "rock";
  } else if (userChoice == "p"){
    userChoice = "paper";
  } else if (userChoice = "s") {
    userChoice = "scissors";
  } else {
    //pass
  }
  return userChoice;
}
const mainLoop = () => {
  console.log("Welcome to rock paper scissors in Javascript!");
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  console.log(checkWinner(userChoice, computerChoice));
}

mainLoop();
module.exports = { checkWinner };