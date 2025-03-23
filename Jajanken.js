//Variables
let humanScore = 0;
let computerScore = 0;
let humanSelection = "";

const gameRestart = document.querySelector(".resetGame");
const winner = document.querySelector(".winner");
const gameOver = document.querySelector(".gameOver");
const btnRock = document.querySelector(".rock");
const results = document.querySelector(".results");
const botChoice = document.querySelector(".botChoice");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

///Functions

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

function playRound(humanChoice, computerChoice) {
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

function gameStop() {
  if (humanScore === 5) {
    gameOver.textContent = "Game Over! Human Wins!!";
    document.querySelectorAll(".btn").forEach((elem) => {
      elem.disabled = true;
    });
  } else if (computerScore === 5) {
    gameOver.textContent = "Game Over! Bot Wins!!";
    document.querySelectorAll(".btn").forEach((elem) => {
      elem.disabled = true;
    });
  }
}

function gameReset() {
  humanScore = 0;
  computerScore = 0;

  document.querySelectorAll(".btn").forEach((elem) => {
    elem.disabled = false;
  });
  results.textContent =
    "Human wins " + humanScore + " Bot wins " + computerScore;
  gameOver.textContent = "";
  winner.textContent = "";
  botChoice.textContent = "";
}

///Events

btnRock.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  humanSelection = "rock";
  botChoice.textContent = "Bot Choose " + computerSelection;
  playRound(humanSelection, computerSelection);
  results.textContent =
    "Human wins " + humanScore + " Bot wins " + computerScore;
  gameStop();
});

btnPaper.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  humanSelection = "paper";
  botChoice.textContent = "Bot Choose " + computerSelection;
  playRound(humanSelection, computerSelection);
  results.textContent =
    "Human wins " + humanScore + " Bot wins " + computerScore;
  gameStop();
});

btnScissors.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  humanSelection = "scissors";
  playRound(humanSelection, computerSelection);
  botChoice.textContent = "Bot Choose " + computerSelection;
  results.textContent =
    "Human wins " + humanScore + " Bot wins " + computerScore;
  gameStop();
});

gameRestart.addEventListener("click", () => {
  gameReset();
});
