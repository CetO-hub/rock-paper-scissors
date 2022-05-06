// Generate "rock","paper" or "scissors" for computer randomly
function generateItemComputer() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) return "rock";
  else if (randomNumber === 2) return "paper";
  else return "scissors";
}

// Selection by the player
function selectPlayer(e) {
  let isSelectionPlayer = e.target["id"];
  return playRound(isSelectionPlayer, generateItemComputer());
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
  console.log(winner);
  if (winner === "player") {
    playerCount++;
    let won = document.querySelector(".scorePlayer");
    let wonMessage = document.querySelector(".won");
    let makeChoice = document.querySelector(".makeChoice");
    let arrows = document.querySelectorAll(".arrow");
    wonMessage.setAttribute("style", "display:flex;");
    won.innerText = playerCount;
    makeChoice.setAttribute("style", "display:none;");
    arrows.forEach((arrow) => arrow.setAttribute("style", "display:none;"));
    return setTimeout(resetBoard, 1000);
  }
  computerCount++;
  let won = document.querySelector(".scoreComputer");
  let lostMessage = document.querySelector(".lost");
  let makeChoice = document.querySelector(".makeChoice");
  let arrows = document.querySelectorAll(".arrow");
  lostMessage.setAttribute("style", "display:flex;");
  won.innerText = computerCount;
  makeChoice.setAttribute("style", "display:none;");
  arrows.forEach((arrow) => arrow.setAttribute("style", "display:none;"));
  return setTimeout(resetBoard, 1000);
}

// Reset the styles of the board for next round
function resetBoard() {
  let makeChoice = document.querySelector(".makeChoice");
  let arrows = document.querySelectorAll(".arrow");
  makeChoice.setAttribute("style", "display:flex;");
  arrows.forEach((arrow) => arrow.setAttribute("style", "visibility:visible;"));
  let lostMessage = document.querySelector(".lost");
  let wonMessage = document.querySelector(".won");
  lostMessage.setAttribute("style", "display:none;");
  wonMessage.setAttribute("style", "display:none;");
  return;
}
// Display the winner of the game
function displayWinnerGame() {
  return;
}
let playerCount = 0;
let computerCount = 0;

let isButtons = document.querySelectorAll(".btn");
isButtons.forEach((btn) => btn.addEventListener("click", selectPlayer));
