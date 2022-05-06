// Generate "rock","paper" or "scissors" for computer randomly
function generateItemComputer() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) return "rock";
  else if (randomNumber === 2) return "paper";
  else return "scissors";
}

// Selection by the player
function selectPlayer(e) {
  isSelectionPlayer = e.target["id"];
  console.log(isSelectionPlayer);
  isComputerItem = generateItemComputer();
  return playRound(isSelectionPlayer, isComputerItem);
}

// Play one round
function playRound(playerItem, computerItem) {
  if (
    (playerItem === "rock" && computerItem === "scissors") ||
    (playerItem === "scissors" && computerItem === "paper") ||
    (playerItem === "paper" && computerItem === "rock")
  ) {
    return displayWinnerRound("player");
  }
  return displayWinnerRound("computer");
}

// Display the winner
function displayWinnerRound(winner) {
  let computerItem = document.querySelector(".computerItem");
  let playerItem = document.querySelector(".playerItem");
  let arrows = document.querySelectorAll(".arrow");
  let choiceMessage = document.querySelector(".choiceMessage");
  choiceMessage.setAttribute("style", "display:flex;");
  arrows.forEach((arrow) => arrow.setAttribute("style", "display:none;"));
  computerItem.innerHTML = isComputerItem;
  playerItem.innerHTML = isSelectionPlayer;
  if (winner === "player") {
    playerCount++;
    let won = document.querySelector(".scorePlayer");
    let makeChoice = document.querySelector(".makeChoice");
    won.innerText = playerCount;
    makeChoice.innerText = "You have won!";
    return setTimeout(resetBoard, 1000);
  }
  computerCount++;
  let won = document.querySelector(".scoreComputer");
  let makeChoice = document.querySelector(".makeChoice");
  won.innerText = computerCount;
  makeChoice.innerText = "You have lost!";
  return setTimeout(resetBoard, 1000);
}

// Reset the styles of the board for next round
function resetBoard() {
  let makeChoice = document.querySelector(".makeChoice");
  let arrows = document.querySelectorAll(".arrow");
  let choiceMessage = document.querySelector(".choiceMessage");
  choiceMessage.setAttribute("style", "display:none;");
  makeChoice.innerText = "Make your choice!";
  arrows.forEach((arrow) => arrow.setAttribute("style", "display:flex;"));

  return;
}
// Display the winner of the game
function displayWinnerGame() {
  return;
}
var isSelectionPlayer = 0;
var isComputerItem = 0;
let playerCount = 0;
let computerCount = 0;

let isButtons = document.querySelectorAll(".btn");
isButtons.forEach((btn) => btn.addEventListener("click", selectPlayer));
