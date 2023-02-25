// Define the players
const PLAYER_X = 'X';
const PLAYER_O = 'O';

// Initialize the current player
let currentPlayer = PLAYER_X;

// Initialize the game board
let gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
];

// Get all the cells in the game board
const cells = document.querySelectorAll('td');

// Add event listeners to each cell
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    // If the cell is already occupied, do nothing
    if (gameBoard[cell.id] !== '') {
      return;
    }

    // Update the game board with the current player's symbol
    gameBoard[cell.id] = currentPlayer;

    // Update the cell's text content with the current player's symbol
    cell.textContent = currentPlayer;

    // Check if the current player has won
    if (checkWin(currentPlayer)) {
      alert(`${currentPlayer} wins!`);
      resetGame();
      return;
    }

    // Check if the game is a tie
    if (checkTie()) {
      alert('Tie game!');
      resetGame();
      return;
    }

    // Switch to the other player
    currentPlayer = (currentPlayer === PLAYER_X) ? PLAYER_O : PLAYER_X;
  });
});

// Function to check if the current player has won
function checkWin(player) {
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (gameBoard[i] === player && gameBoard[i+1] === player && gameBoard[i+2] === player) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (gameBoard[i] === player && gameBoard[i+3] === player && gameBoard[i+6] === player) {
      return true;
    }
  }

  // Check diagonals
  if (gameBoard[0] === player && gameBoard[4] === player && gameBoard[8] === player) {
    return true;
  }
  if (gameBoard[2] === player && gameBoard[4] === player && gameBoard[6] === player) {
    return true;
  }

  // If no win conditions are met, return false
  return false;
}

// Function to check if the game is a tie
function checkTie() {
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === '') {
      return false;
    }
  }

  return true;
}

// Function to reset the game
function resetGame() {
  // Clear the game board
  gameBoard = [
    '', '', '',
    '', '', '',
    '', '', ''
  ];

  // Reset the current player to X
  currentPlayer = PLAYER_X;

  // Clear the text content of all cells
  cells.forEach(cell => {
    cell.textContent = '';
  });
}
