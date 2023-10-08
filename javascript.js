//get computer choice
let computerChoice;
let playerSelection;
let result;

function getComputerChoice() {
  let number = Math.random()*3;
  number = Math.round(number);
  switch (number) {
    case 1: computerChoice = "ROCK";
    break;
    case 2: computerChoice = "PAPER";
    break;
    case 3: computerChoice = "SCISORS";
    break;
  }
}

function getPlayerSelection() {
  playerInput = prompt("Make your choice:").toUpperCase;
  if (playerInput === "ROCK" || "PAPER" || "SCISORS") {
    playerSelection = playerInput;
  } else {
    console.log("Invalid choice, go again");
    getPlayerSelection();
  }

function getResult(computerChoice, playerSelection) {
  if (computerChoice === playerSelection) {
    result = "Draw";
  } else if (computerChoice === "ROCK") {
    result = playerSelection === "PAPER" ? "Win" : "Loss";
  }  else if (computerChoice === "PAPER") {
    result = playerSelection === "SCISORS" ? "Win" : "Loss";
  }
}
}

function game() {
  let playerScoreCount = 0;
  let computerScoreCount = 0;

  for (let i = 1; i <= 5; i++) {
    getComputerChoice;
    getPlayerSelection;
    getResult;
    console.log(result)
    if (result === "Win") {playerScoreCount++}
    if (result === "Loss") {computerScoreCount++}
  }

  playerScoreCount > computerScoreCount ? console.log("You win") : console.log("You lose");
}
