let guess = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let answer = Math.floor(Math.random() * guess.length);
  return guess[answer];
}

function playRound() {
  let playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

function game() {
  for (var i = 1; i < 6; i++) playRound(i);
}

game();
