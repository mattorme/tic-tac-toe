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
var resetBoard = document.querySelector(".reset-button");
var resetScore = document.querySelector(".reset-score");
var scoreX = document.querySelector(".score-count-x");
var scoreO = document.querySelector(".score-count-o");
var totalX = 0;
var totalO = 0;
var blueBtn = document.querySelector(".blue-btn");
var greenBtn = document.querySelector(".green-btn");
var redBtn = document.querySelector(".red-btn");
var orangeBtn = document.querySelector(".orange-btn");
var yellowBtn = document.querySelector(".yellow-btn");
var purpleBtn = document.querySelector(".purple-btn");
var pinkBtn = document.querySelector(".pink-btn");
var gameColor = document.querySelector(".game");

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
    winnerMsg.textContent = `X's win!`;
    lockBoard();
    updateScoreX();
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
    winnerMsg.textContent = `O's win!`;
    lockBoard();
    updateScoreO();
  }
}

function lockBoard() {
  space1.style.pointerEvents = "none";
  space2.style.pointerEvents = "none";
  space3.style.pointerEvents = "none";
  space4.style.pointerEvents = "none";
  space5.style.pointerEvents = "none";
  space6.style.pointerEvents = "none";
  space7.style.pointerEvents = "none";
  space8.style.pointerEvents = "none";
  space9.style.pointerEvents = "none";
}

function unlockBoard() {
  space1.style.pointerEvents = "all";
  space2.style.pointerEvents = "all";
  space3.style.pointerEvents = "all";
  space4.style.pointerEvents = "all";
  space5.style.pointerEvents = "all";
  space6.style.pointerEvents = "all";
  space7.style.pointerEvents = "all";
  space8.style.pointerEvents = "all";
  space9.style.pointerEvents = "all";
}

function checkDraw() {
  if (
    (space1.textContent == playerOne || space1.textContent == playerTwo) &&
    (space2.textContent == playerOne || space2.textContent == playerTwo) &&
    (space3.textContent == playerOne || space3.textContent == playerTwo) &&
    (space4.textContent == playerOne || space4.textContent == playerTwo) &&
    (space5.textContent == playerOne || space5.textContent == playerTwo) &&
    (space6.textContent == playerOne || space6.textContent == playerTwo) &&
    (space7.textContent == playerOne || space7.textContent == playerTwo) &&
    (space8.textContent == playerOne || space8.textContent == playerTwo) &&
    (space9.textContent == playerOne || space9.textContent == playerTwo)
  ) {
    winnerMsg.textContent = "It's a draw!";
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
  winnerMsg.textContent = "";
  unlockBoard();
}

function resetScores() {
  totalX = 0;
  totalO = 0;
  scoreX.textContent = "Player One Score: " + totalX;
  scoreO.textContent = "Player One Score: " + totalO;
}

function updateScoreX() {
  totalX = totalX + 1;
  scoreX.textContent = "Player One Score: " + totalX;
}

function updateScoreO() {
  totalO = totalO + 1;
  scoreO.textContent = "Player One Score: " + totalO;
}

function changeBlue() {
  gameColor.style.backgroundColor = "#75c8c8";
  space1.style.backgroundColor = "#75c8c8";
  space2.style.backgroundColor = "#75c8c8";
  space3.style.backgroundColor = "#75c8c8";
  space4.style.backgroundColor = "#75c8c8";
  space5.style.backgroundColor = "#75c8c8";
  space6.style.backgroundColor = "#75c8c8";
  space7.style.backgroundColor = "#75c8c8";
  space8.style.backgroundColor = "#75c8c8";
  space9.style.backgroundColor = "#75c8c8";
}

function changeGreen() {
  gameColor.style.backgroundColor = "#75c88e";
  space1.style.backgroundColor = "#75c88e";
  space2.style.backgroundColor = "#75c88e";
  space3.style.backgroundColor = "#75c88e";
  space4.style.backgroundColor = "#75c88e";
  space5.style.backgroundColor = "#75c88e";
  space6.style.backgroundColor = "#75c88e";
  space7.style.backgroundColor = "#75c88e";
  space8.style.backgroundColor = "#75c88e";
  space9.style.backgroundColor = "#75c88e";
}

function changeRed() {
  gameColor.style.backgroundColor = "#c87575";
  space1.style.backgroundColor = "#c87575";
  space2.style.backgroundColor = "#c87575";
  space3.style.backgroundColor = "#c87575";
  space4.style.backgroundColor = "#c87575";
  space5.style.backgroundColor = "#c87575";
  space6.style.backgroundColor = "#c87575";
  space7.style.backgroundColor = "#c87575";
  space8.style.backgroundColor = "#c87575";
  space9.style.backgroundColor = "#c87575";
}

function changeOrange() {
  gameColor.style.backgroundColor = "#c8a175";
  space1.style.backgroundColor = "#c8a175";
  space2.style.backgroundColor = "#c8a175";
  space3.style.backgroundColor = "#c8a175";
  space4.style.backgroundColor = "#c8a175";
  space5.style.backgroundColor = "#c8a175";
  space6.style.backgroundColor = "#c8a175";
  space7.style.backgroundColor = "#c8a175";
  space8.style.backgroundColor = "#c8a175";
  space9.style.backgroundColor = "#c8a175";
}

function changeYellow() {
  gameColor.style.backgroundColor = "#c7c875";
  space1.style.backgroundColor = "#c7c875";
  space2.style.backgroundColor = "#c7c875";
  space3.style.backgroundColor = "#c7c875";
  space4.style.backgroundColor = "#c7c875";
  space5.style.backgroundColor = "#c7c875";
  space6.style.backgroundColor = "#c7c875";
  space7.style.backgroundColor = "#c7c875";
  space8.style.backgroundColor = "#c7c875";
  space9.style.backgroundColor = "#c7c875";
}

function changePurple() {
  gameColor.style.backgroundColor = "#a375c8";
  space1.style.backgroundColor = "#a375c8";
  space2.style.backgroundColor = "#a375c8";
  space3.style.backgroundColor = "#a375c8";
  space4.style.backgroundColor = "#a375c8";
  space5.style.backgroundColor = "#a375c8";
  space6.style.backgroundColor = "#a375c8";
  space7.style.backgroundColor = "#a375c8";
  space8.style.backgroundColor = "#a375c8";
  space9.style.backgroundColor = "#a375c8";
}

function changePink() {
  gameColor.style.backgroundColor = "#c875b6";
  space1.style.backgroundColor = "#c875b6";
  space2.style.backgroundColor = "#c875b6";
  space3.style.backgroundColor = "#c875b6";
  space4.style.backgroundColor = "#c875b6";
  space5.style.backgroundColor = "#c875b6";
  space6.style.backgroundColor = "#c875b6";
  space7.style.backgroundColor = "#c875b6";
  space8.style.backgroundColor = "#c875b6";
  space9.style.backgroundColor = "#c875b6";
}

function handleClick(event) {
  event.target.textContent = playerTurn;
  event.target.style.pointerEvents = "none";
  checkDraw();
  checkWin();
  changeTurn();
}

// Event Listeners
for (var i = 0; i < spaces.length; i++) {
  spaces[i].addEventListener("click", handleClick);
}

resetBoard.addEventListener("click", resetGame);
resetScore.addEventListener("click", resetScores);

blueBtn.addEventListener("click", changeBlue);
greenBtn.addEventListener("click", changeGreen);
redBtn.addEventListener("click", changeRed);
orangeBtn.addEventListener("click", changeOrange);
yellowBtn.addEventListener("click", changeYellow);
purpleBtn.addEventListener("click", changePurple);
pinkBtn.addEventListener("click", changePink);
