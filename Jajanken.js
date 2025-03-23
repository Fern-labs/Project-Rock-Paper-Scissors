let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3 + 1);

  let rockPaperSiz;

  if (num === 1) {
    rockPaperSiz = "rock";
  } else if (num === 2) {
    rockPaperSiz = "paper";
  } else if (num === 3) {
    rockPaperSiz = "scissors";
  }
  return rockPaperSiz;
}

// function getHumanChoice() {
//   let userInput = prompt("Rock, Paper, Scissors, Shoot!").toLowerCase();
//   console.log("Human Choose: " + userInput);
//   return userInput;
// }

function playRound(humanChoice, computerChoice) {
  const winner = document.querySelector(".winner");
  if (humanChoice === "rock" && computerChoice === "scissors") {
    winner.textContent = "You Win! Rock beats Scissors.";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    winner.textContent = "You Win! Paper beats Rock.";
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    winner.textContent = "You Win! Scissors beats Paper";
    humanScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    winner.textContent = "You Lose! Rock beats Scissors.";
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    winner.textContent = "You Lose! Paper beats Rock.";
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    winner.textContent = "You Lose! Scissors beats Paper";
    computerScore++;
  } else {
    winner.textContent = "Its a Tie";
  }
}

//if a bug look at humanSelection
const btnRock = document.querySelector(".rock");
btnRock.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  humanSelection = "rock";
  botChoice.textContent = "Bot Choose " + computerSelection;
  playRound(humanSelection, computerSelection);
  results.textContent =
    "Human wins " + humanScore + " Bot wins " + computerScore;
});

const results = document.querySelector(".results");
const botChoice = document.querySelector(".botChoice");

const btnPaper = document.querySelector(".paper");
btnPaper.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  humanSelection = "paper";
  botChoice.textContent = "Bot Choose " + computerSelection;
  playRound(humanSelection, computerSelection);
  results.textContent =
    "Human wins " + humanScore + " Bot wins " + computerScore;
});

const btnScissors = document.querySelector(".scissors");
btnScissors.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  humanSelection = "scissors";

  playRound(humanSelection, computerSelection);
  botChoice.textContent = "Bot Choose " + computerSelection;
  results.textContent =
    "Human wins " + humanScore + " Bot wins " + computerScore;
});
