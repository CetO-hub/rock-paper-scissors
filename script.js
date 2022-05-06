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
function playRound(player, computer) {
  console.log(player);
  console.log(computer);
  return;
}

// Display the winner
function displayWinnerRound() {
  return;
}
// DIsplay the winner of the game
function displayWinnerGame() {
  return;
}

let isButtons = document.querySelectorAll(".btn");
isButtons.forEach((btn) => btn.addEventListener("click", selectPlayer));
