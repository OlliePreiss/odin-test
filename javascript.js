const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scisors = document.querySelector("#scisors");
const resultMessage = document.querySelector("#result");
let userScoreDisplay = document.querySelector("#userScore");
let computerScoreDisplay = document.querySelector("#computerScore");
let userScoreTally = 0;
let computerScoreTally = 0;


rock.addEventListener('click', () => {
  playRound(rock);
  console.log("Clicked on rock");
})

paper.addEventListener('click', () => {
  playRound(paper);
})

scisors.addEventListener('click', () => {
  playRound(scisors);
})


function playRound(userSelection) {
  let computerSelection = selectComputerOption()
  let winner = determineWinner(userSelection, computerSelection)
  resetScores();
  displayUpdatedScore(winner);
  displayRoundOutcome(winner);
}

function selectComputerOption() {
  let rand = Math.floor((Math.random() * 3) + 1);
  if (rand === 1) {
    return "rock";
  } else if (rand === 2) {
    return "paper";
  } else {
    return "scisors";
  }
}

function determineWinner(user,computer) {
  // captures the three scenarios in which the user loses
  if ((user == rock && computer == "paper") || (user == paper && computer == "scisors") || (user == scisors && computer == "rock")) {
    computerScoreTally += 1;
    return "Computer";
  // captures the three scenarios in which the user wins
  } else if ((user == rock && computer == "scisors") || (user == paper && computer == "rock") || (user == scisors && computer == "paper")) {
    userScoreTally += 1;
    return "User";
  } else {
    return "draw";
  }
}

function displayRoundOutcome(winner) {
  resultMessage.removeChild(resultMessage.lastChild)
  const p = document.createElement("p");
  if (winner == "User") {
    p.textContent = "User wins!";
  } else if (winner == "Computer") {
    p.textContent = "Computer wins!";
  } else if (winner = "draw") {
    p.textContent = "Draw!"
  }
  resultMessage.appendChild(p)
}

function displayUpdatedScore(winner) {
  if (winner == "User") {
    userScoreDisplay.textContent = `${userScoreTally}`;
  } else if (winner == "Computer") {
    computerScoreDisplay.textContent = `${computerScoreTally}`;
  }
}

function resetScores() {
  if ((userScoreTally > 5) || (computerScoreTally > 5)) {
    userScoreTally = 0;
    userScoreDisplay.textContent = `${userScoreTally}`;
    computerScoreTally = 0;
    computerScoreDisplay.textContent = `${computerScoreTally}`;
  }
}
