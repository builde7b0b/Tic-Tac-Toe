
// PSUEDO LOGIC 
// ############

// Create 3x3 grid and display on page 

//variables for player symbols and //positions
    // let player1 = 'X'
    // let player2 = 'O' 
    // init var for p1 position = []
    // init var for p2 position = []

// Game Logic Rough:
    // get each spot in the grid.
    // grid = array of divs 
        // loop through array to track each position on the board 

    // Set conditions for winning 
    // If player1 positions 
        // 3 x's in a row 
        // In any direction
        // function checkWin
    // player1 Wins 

    // Else if player2 positions 
        // 3 o's in a row 
        // in any direction 
        // function checkWin
    // player 2 wins 


// Game logic Detail:
    // When a player clicks a cell, add their position to their respective array 
    // Check if the player has won by comparing their positions to winning combinations 
        // If the player has won, display a message and end the game 
    // If the game board is full and no player has won, display a tie message and end the game   
    // If the game hasnot ended, switch to the other player's turn and continue playing.  


// Set conditions for winning
    // Winning Combinations:
    // Row 1: [0, 1, 2]
    // Row 2: [3, 4, 5]
    // Row 3: [6, 7, 8]
    // Column 1: [0, 3, 6]
    // COlumn 2: [1, 4, 7]
    // Column 3: [2, 5, 8]
    // Diagonal 1: [0, 4, 8]
    // Diagonal 2: [2, 4, 6]
    // To check for a win, compare the player's positions to each of these combinations
    // if the player's positions match a winning combination, they have won.





// Create Board 
//const grid = document.getElementById('grid');
console.log("Connected")

const container = document.createElement('div');
container.className = 'container';

for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')

    cell.className = 'cell';
    cell.dataset.index = i; // this allows us to keep track of each cell/clicks

    container.appendChild(cell)

}

document.body.appendChild(container)

// select all cells
// adding event listener to each cell
const cells = document.querySelectorAll('.cell')

cells.forEach((cell) => {
    cell.addEventListener('click', handleCellClick);
})










// declr handleCellCick Function 
function handleCellClick(e) {
    // e is the click event
    // Get the Index of the clicked cell 
    const cell = e.target;
    const index = e.target.dataset.index;
    console.log("clicked")
  
// Check duplicate cell click 
if (cell.textContent !== '') { // if the cell is not empty
  return; // ignore the click
}

    // get current player's symbol and positions array 
    const currentPlayer = getCurrentPlayer();
    //returns as obj with symbol/positions props
    const currentSymbol = currentPlayer.symbol;
    const currentPositions = currentPlayer.positions;
  
    // add the current player's position(Clicked Cell) to their positions array 
    currentPositions.push(Number(index));
  console.log(currentPositions)
    // add the current player's symbol to the clicked cell  || puts the symbol into the cell
    e.target.textContent = currentSymbol;
    console.log(currentSymbol)

    // check if the current player has won
    if (checkWin(currentPositions)) {
      //Display a message and end the game
      endGame(`${currentSymbol}`)
    } else if (checkTie()) {
      endGame("It's a tie!");
      return; // exit early if there is a tie

    } else {

      // switch Turn's 
      switchPlayers()
    }
  }


  // init variables
const player1Symbol = 'X'; //player id's
const player2Symbol = 'O';
let player1Positions = []; // player positions arrays
let player2Positions = [];
let gameEnded = false; // game status
// Winning Combinations to check against
// matches the grid Ex. 0, 1, 2 is the first row from left to right
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
 let currentPlayer = getCurrentPlayer().symbol; //track cp

//create message to display Who's turn and if a player Wins
const message = document.createElement('div');
message.className = 'message'
document.body.appendChild(message)

// update the message with the current's player's symbol:
function updateMessage() {
  message.textContent = `It's ${getCurrentPlayer().symbol}'s turn.`
}

updateMessage(); //call to set initial message

// This function is used to determine the cp's symbol and position.
// It's called by another function (handleCellClick) to update the player positions and symbols to the clicked cell.
  function getCurrentPlayer() {
    //retrn object, current player symbol and position
    // check if array's length are equal to determine who's turn it is
    // if equal, it's p1 turn otherwise it's player's 2 turn
    // return player
    return player1Positions.length === player2Positions.length ? 
      { symbol: player1Symbol, positions: player1Positions } : 
      { symbol: player2Symbol, positions: player2Positions };
  }
  
  
// every() array method
  function checkWin(positions) {
    // params: an array of positions( cell indices on our grid/board)
    // loop through each combo of winning positions with for..of
    for (let combination of winningCombinations) {
        // check if *every position in the combo is incl in the param array
      if (combination.every(index => positions.includes(index))) {
        // if YES, return true. We have a WINNER.
        return true;
      }
    }
    return false; //NO Winner Yet
  }
  
  function endGame(winner) {
    // single param: winner
    //ends game
    
    // if (winner) {
    //     message.innerText = `${winner} wins!`;
    //   } else {
    //     message.innerText = "It's a tie!";
    //   }
    // display message based on if a winner exist, using ternary operator. 

    message.innerText = winner ? `${winner} wins!` : "It's a tie!";
    // if true, winner wins, else it's a tie.
    gameEnded = true; //sets game status to true, stops moves from being made
  }
  
  function switchPlayers() {
        // no args 
        // check current player
        // if cp = p1
            // switch player, cp = p2
        // else
            // set cp = p1
            
        // if (currentPlayer === player1Symbol) {
        //     currentPlayer = player2Symbol;
        //   } else {
        //     currentPlayer = player1Symbol;
        //   }
          
    // single line using ternary
    currentPlayer = currentPlayer === player1Symbol ? player2Symbol : player1Symbol;
    updateMessage(); //update call updateMessage when we switch turns
  }



function checkTie() {
  //check if cells are filled 
  const allCellsFilled = Array.from(cells).every(cell => cell.textContent !== '');
  //check if there is no winner 
  const noWinner = !checkWin(player1Positions) && !checkWin(player2Positions)
  return allCellsFilled && noWinner 

}


// create the "button", add event listener
const resetButton = document.createElement('button')
resetButton.textContent = 'Reset'
resetButton.addEventListener('click', resetGame)

// Add the 'Reset" button to the page 
document.body.appendChild(resetButton)

// define the resetGame function 
function resetGame() {
  // clear all cells on the board 
  cells.forEach(cell => cell.textContent = '')

  //Reset game status and player positions 
  player1Positions = [];
  player2Positions = [];
  gameEnded = false;

  //reset message 
  message.textContent = ''

  //switch to player 1 turn
  currentPlayer = player1Symbol;

}