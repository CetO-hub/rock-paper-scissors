// GENERATE "rock","paper" or "scissors" for computer randomly
function generateItemComputer() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) return "rock";
  else if (randomNumber === 2) return "paper";
  else return "scissors";
}

// PROMPT user for his/her choice
function promptUser() {
  let userItem = prompt("Please enter rock, scissors or paper");
  return userItem;
}

// REPEAT until round count == 5, print winner of the round and count the rounds won
let wonUser = 0;
let wonComputer = 0;
for (let i = 0; i < 5; i++) {
  if (wonUser > 2 || wonComputer > 2) break;
  let itemComputer = generateItemComputer();
  let itemUser = promptUser();
  console.log(`Computer's choice: ${itemComputer}`);
  console.log(`Your choice: ${itemUser}`);
  if (itemComputer === itemUser) {
    console.log("It is a draw");
    continue;
  } else if (
    (itemComputer == "rock" && itemUser == "paper") ||
    (itemComputer == "paper" && itemUser == "scissors") ||
    (itemComputer == "scissors" && itemUser == "rock")
  ) {
    wonUser++;
    console.log("You have won");
    continue;
  }
  wonComputer++;
  console.log("You have lost");
}

// Print the final winner of the game
if (wonUser > wonComputer) {
  console.log(`You have won with ${wonUser} won rounds out of 5 rounds`);
} else if (wonUser < wonComputer) {
  console.log(`You have lost with ${wonUser} won rounds out of 5 rounds`);
} else if (wonUser === wonComputer) {
  console.log(`It is a draw with ${wonUser} won rounds out of 5 rounds`);
}
