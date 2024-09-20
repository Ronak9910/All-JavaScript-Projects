const gameBox = document.querySelectorAll(".game");
const gameArea = document.querySelector(".game-wrapper");
const content = document.querySelector(".content");
const playAgain = document.querySelector(".btn");

let player = 0;
const playerName = ["X", "O"];
let arr = new Array(9).fill(-1);
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

// Event Listener for Clicks on the Game Board
gameArea.addEventListener("click", (event) => {
  const target = event.target;
  const index = Number(target.dataset.id);

  // Ensure the click is on a valid game box
  if (target.classList.contains("game") && arr[index] === -1) {
    arr[index] = player;
    gameBox[index].innerHTML = playerName[player];

    const result = checkWinner();
    if (result.length) {
      result.forEach((item) => {
        gameBox[item].classList.add("active");
      });
      content.innerHTML = `Player ${playerName[player]} won the game!`;
      gameArea.style.pointerEvents = "none";
      playAgain.style.display = "block";
    } else if (arr.every((item) => item !== -1)) {
      // Handle Draw Condition
      content.innerHTML = "It's a draw!";
      gameArea.style.pointerEvents = "none";
      playAgain.style.display = "block";
    } else {
      switchPlayer();
    }
  }
});

// Function to Check the Winner
function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (arr[a] === player && arr[b] === player && arr[c] === player) {
      return combination; // Return the winning combination
    }
  }
  return []; // No winner
}

// Switch Player Function
function switchPlayer() {
  player = 1 - player; // Toggle between 0 and 1
  content.innerHTML = `${playerName[player]} - Player turn`;
}

// Reset the Game for Replay
playAgain.addEventListener("click", () => {
  arr.fill(-1); // Reset game state
  player = 0;
  gameBox.forEach((item) => {
    item.classList.remove("active");
    item.innerHTML = "";
  });
  content.innerHTML = `${playerName[player]} - Player turn`;
  playAgain.style.display = "none";
  gameArea.style.pointerEvents = "auto";
});
