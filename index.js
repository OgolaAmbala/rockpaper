let guess = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let answer = Math.floor(Math.random() * guess.length);
  return guess[answer];
}
console.log(getComputerChoice());
