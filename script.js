console.log("hello");

// Variables
var spaces = document.querySelectorAll(".spaces");
var space1 = document.querySelector(".space-1");
var space2 = document.querySelector(".space-2");
var space3 = document.querySelector(".space-3");
var space4 = document.querySelector(".space-4");
var space5 = document.querySelector(".space-5");
var space6 = document.querySelector(".space-6");
var space7 = document.querySelector(".space-7");
var space8 = document.querySelector(".space-8");
var space9 = document.querySelector(".space-9");
var playerOne = "x";
var playerTwo = "o";
var playerTurn = playerOne;
var winnerMsg = document.querySelector(".winner-msg-p");
var resetBtn = document.querySelector(".reset-button");

// Functions
function changeTurn() {
  if (playerTurn == playerOne) {
    playerTurn = playerTwo;
  } else {
    playerTurn = playerOne;
  }
}

function checkWin() {
  if (
    (space1.textContent == playerOne &&
      space2.textContent == playerOne &&
      space3.textContent == playerOne) ||
    (space4.textContent == playerOne &&
      space5.textContent == playerOne &&
      space6.textContent == playerOne) ||
    (space7.textContent == playerOne &&
      space8.textContent == playerOne &&
      space9.textContent == playerOne) ||
    (space1.textContent == playerOne &&
      space4.textContent == playerOne &&
      space7.textContent == playerOne) ||
    (space2.textContent == playerOne &&
      space5.textContent == playerOne &&
      space8.textContent == playerOne) ||
    (space3.textContent == playerOne &&
      space6.textContent == playerOne &&
      space9.textContent == playerOne) ||
    (space1.textContent == playerOne &&
      space5.textContent == playerOne &&
      space9.textContent == playerOne) ||
    (space3.textContent == playerOne &&
      space5.textContent == playerOne &&
      space7.textContent == playerOne)
  ) {
    winnerMsg.textContent = `X's won!`;
  } else if (
    (space1.textContent == playerTwo &&
      space2.textContent == playerTwo &&
      space3.textContent == playerTwo) ||
    (space4.textContent == playerTwo &&
      space5.textContent == playerTwo &&
      space6.textContent == playerTwo) ||
    (space7.textContent == playerTwo &&
      space8.textContent == playerTwo &&
      space9.textContent == playerTwo) ||
    (space1.textContent == playerTwo &&
      space4.textContent == playerTwo &&
      space7.textContent == playerTwo) ||
    (space2.textContent == playerTwo &&
      space5.textContent == playerTwo &&
      space8.textContent == playerTwo) ||
    (space3.textContent == playerTwo &&
      space6.textContent == playerTwo &&
      space9.textContent == playerTwo) ||
    (space1.textContent == playerTwo &&
      space5.textContent == playerTwo &&
      space9.textContent == playerTwo) ||
    (space3.textContent == playerTwo &&
      space5.textContent == playerTwo &&
      space7.textContent == playerTwo)
  ) {
    winnerMsg.textContent = `O's won!`;
  }
}

function resetGame() {
  space1.textContent = "";
  space2.textContent = "";
  space3.textContent = "";
  space4.textContent = "";
  space5.textContent = "";
  space6.textContent = "";
  space7.textContent = "";
  space8.textContent = "";
  space9.textContent = "";
  playerTurn = playerOne;
}

function handleClick(event) {
  event.target.textContent = playerTurn;
  checkWin();
  changeTurn();
}

// Event Listeners
for (var i = 0; i < spaces.length; i++) {
  spaces[i].addEventListener("click", handleClick);
}

resetBtn.addEventListener("click", resetGame);
