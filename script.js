function generateItemComputer() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) return "rock";
  else if (randomNumber === 2) return "paper";
  else return "scissors";
}

function promptUser() {
  let userItem = prompt("Please enter rock, scissors or paper");
  return userItem;
}
