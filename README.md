# rock-paper-scissors

A rock-paper-scissors game, demonstrating first javaScript skills.

Problem
A console based rock-paper-scissors game. The computer should generate a random item (rock, paper or scissors) and this item is then compared with the item entered by the user. A total amount of 5 rounds should be played. After each round the result for the current round should be displayed. After the 5th round the end result is displayed showing the winner of the game with over 50% won rounds.

Plan
No user interface planned. User input is performed via the prompt.
Data output is printed in the console log.

Pseudocode

WHEN load the script
GENERATE "rock","paper" or "scissors" for computer randomly
PROMPT user for his/her choice
REPEAT until round count == 5
IF ((computer == "rock" and user == "paper") or (computer == "paper" and user == "scissors") or (computer == "scissors" and user == "rock"))
Display "user has won the round"
INCREASE rounds won user by 1
ELSE
Display "computer has wonthe round"
INCREASE rounds won computer by 1
DIVIDE rounds won user by round count 5 and multiply with 100
IF result > 50%
Display "user has won the game"
Display "computer has won the round"
