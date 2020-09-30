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
var x = "x";
var o = "o";
var playerTurn = x;

for (var i = 0; i < spaces.length; i++) {
  spaces[i].addEventListener("click", handleClick);
}

// Functions
function changeTurn() {
  if (playerTurn == x) {
    playerTurn = o;
  } else {
    playerTurn = x;
  }
}

function checkWin() {
  if (
    (space1.textContent == x &&
      space2.textContent == x &&
      space3.textContent == x) ||
    (space4.textContent == x &&
      space5.textContent == x &&
      space6.textContent == x) ||
    (space7.textContent == x &&
      space8.textContent == x &&
      space9.textContent == x) ||
    (space1.textContent == x &&
      space4.textContent == x &&
      space7.textContent == x) ||
    (space2.textContent == x &&
      space5.textContent == x &&
      space8.textContent == x) ||
    (space3.textContent == x &&
      space6.textContent == x &&
      space9.textContent == x) ||
    (space1.textContent == x &&
      space5.textContent == x &&
      space9.textContent == x) ||
    (space3.textContent == x &&
      space5.textContent == x &&
      space7.textContent == x) ||
    (space1.textContent == o &&
      space2.textContent == o &&
      space3.textContent == o) ||
    (space4.textContent == o &&
      space5.textContent == o &&
      space6.textContent == o) ||
    (space7.textContent == o &&
      space8.textContent == o &&
      space9.textContent == o) ||
    (space1.textContent == o &&
      space4.textContent == o &&
      space7.textContent == o) ||
    (space2.textContent == o &&
      space5.textContent == o &&
      space8.textContent == o) ||
    (space3.textContent == o &&
      space6.textContent == o &&
      space9.textContent == o) ||
    (space1.textContent == o &&
      space5.textContent == o &&
      space9.textContent == o) ||
    (space3.textContent == o &&
      space5.textContent == o &&
      space7.textContent == o)
  ) {
    console.log("winner");
  }
}

function handleClick(event) {
  event.target.textContent = playerTurn;
  checkWin();
  changeTurn();
}
