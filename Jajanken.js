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
  console.log("Bot Choose: " + rockPaperSiz);
  return rockPaperSiz;
}

function getHumanChoice() {
  let userInput = prompt("Rock, Paper, Scissors, Shoot!").toLowerCase();
  console.log("Human Choose: " + userInput);
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win! Rock beats Scissors.");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win! Paper beats Rock.");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win! Scissors beats Paper");
    humanScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You Lose! Rock beats Scissors.");
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You Lose! Paper beats Rock.");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You Lose! Scissors beats Paper");
    computerScore++;
  } else {
    console.log("Its a Tie");
  }
}

function playGame(num) {
  let count = 0;
  while (count < num) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    count++;
    console.log("");
  }
}

console.log("Rock. Paper. Scissors. Best of 5!");
playGame(5);
console.log("Human wins " + humanScore);
console.log("Bot wins " + computerScore);
