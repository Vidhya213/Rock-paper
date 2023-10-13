let userScore = 0;
let computerScore = 0;
let movesLeft = 10;
const userScoreElement = document.querySelector(".user .zero");
const computerScoreElement = document.querySelector(".comp .zero");
const moveTextElement = document.querySelector(".move");
const resultElement = document.querySelector(".result");
const movesLeftElement = document.querySelector(".moves-left");
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "It's a tie!🙆‍♂️";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    return "You win!🥳";
  } else {
    computerScore++;
    return "Computer wins!😒";
  }
}
function updateScore(userChoice, computerChoice) {
  if (movesLeft === 0) {
    return;
  }
  const result = determineWinner(userChoice, computerChoice);
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
  movesLeft--;
  movesLeftElement.textContent = `Moves left: ${movesLeft}`;
  if (movesLeft === 0) {
    let gameResult = determineGameWinner();
    resultElement.textContent = gameResult;
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.classList.add("restart-button");
    restartButton.addEventListener("click", restartGame);
    document.querySelector(".restart").appendChild(restartButton);
  }
  moveTextElement.textContent = `You choose ${userChoice}, Computer choose ${computerChoice}`;
  if (movesLeft > 0) {
    resultElement.textContent = result;
  }
}
function determineGameWinner() {
  if (userScore > computerScore) {
    return "You win the game!🥳";
  } else if (computerScore > userScore) {
    return "Computer wins the game!😒";
  } else {
    return "It's a tie game!🙆‍♂️";
  }
}
function userChoiceHandler(userChoice) {
  if (movesLeft === 0) {
    return;
  }
  const computerChoice = getComputerChoice();
  updateScore(userChoice, computerChoice);
}
function restartGame() {
  userScore = 0;
  computerScore = 0;
  movesLeft = 20;
  userScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
  movesLeftElement.textContent = ` Moves left: ${movesLeft}`;
  moveTextElement.textContent = "Choose Your Move";
  resultElement.textContent = "";
  document.querySelector(".restart-button").remove();
}
document
  .querySelector(".rock button")
  .addEventListener("click", () => userChoiceHandler("rock"));
document
  .querySelector(".paper button")
  .addEventListener("click", () => userChoiceHandler("paper"));
document
  .querySelector(".scissors button")
  .addEventListener("click", () => userChoiceHandler("scissors"));
