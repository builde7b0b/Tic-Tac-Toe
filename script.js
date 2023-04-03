
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
// END PSUEDO LOGIC 
// #################



  // init variables
  let player1Symbol = 'X'; //player id's
  let player2Symbol = 'O';
  let player1Positions = []; // player positions arrays
  let player2Positions = [];
  let gameEnded = false; // game status
  let currentPlayer = getCurrentPlayer().symbol; //track cp
    
  let player1Wins = 0
  let player1Losses = 0
  let player1Ties = 0
  let player2Wins = 0
  let player2Losses = 0
  let player2Ties = 0


  const statsContainer = document.createElement('div')
  statsContainer.className = 'stats-container'

  const statsBox = document.createElement('div')
  statsBox.className = 'stats-box'

  const player1SymbolEl = document.createElement('div')
  player1SymbolEl.textContent = `player 1 (${player1Symbol})`

  const player2SymbolEl = document.createElement('div')
  player2SymbolEl.textContent = `Player 2 (${player2Symbol})`
  const player1WinsEl = document.createElement('div');
  player1WinsEl.textContent = 'Wins: 0';

  const player1LossesEl = document.createElement('div');
  player1LossesEl.textContent = 'Losses: 0'

  const player1TiesEl = document.createElement('div')
  player1TiesEl.textContent = 'Ties: 0'

  const player2WinsEl = document.createElement('div')
  player2WinsEl.textContent = 'Wins: 0'

  const player2LossesEl = document.createElement('div')
  player2LossesEl.textContent = 'Losses: 0'

  const player2TiesEl = document.createElement('div')
  player2TiesEl.textContent = 'Ties: 0'

  const logo = document.createElement('h1')
  logo.textContent = 'Tic Tac Gene'
  logo.className = 'logo-container'
  logo.classList.add('logo');
  const icon = document.createElement('img');
  icon.src = 'https://img.icons8.com/external-others-cattaleeya-thongsriphong/256/external-game-relax-at-home-color-line-others-cattaleeya-thongsriphong.png';
  icon.alt = 'Icon';

  const title = document.createElement('span');
title.textContent = 'Your Rules, Your Way';
title.className = 'game-title'
logo.appendChild(icon);
logo.appendChild(title);
  document.body.appendChild(logo)
  document.body.appendChild(statsContainer)
  statsContainer.appendChild(statsBox)
  statsBox.appendChild(player1SymbolEl)
  statsBox.appendChild(player2SymbolEl)
  statsBox.appendChild(player1WinsEl)
  statsBox.appendChild(player1LossesEl)
  statsBox.appendChild(player1TiesEl)
  statsBox.appendChild(player2WinsEl)
  statsBox.appendChild(player2LossesEl);
  statsBox.appendChild(player2TiesEl)


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
    
   
// Create Board 
//const grid = document.getElementById('grid');
  console.log("Connected")

  const container = document.createElement('div');
  container.className = 'container';

  // loop to create each cell
  for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div')

      cell.className = 'cell';
      cell.dataset.index = i; // this allows us to keep track of each cell/clicks

      container.appendChild(cell)

  }
  // add cells to UI
  document.body.appendChild(container)

  // select all cells
  // adding event listener to each cell
  const cells = document.querySelectorAll('.cell')
  cells.forEach((cell) => {
      cell.addEventListener('click', handleCellClick);
  })

  //create message to display Who's turn and if a player Wins
  const message = document.createElement('div');
  message.className = 'message';
  message.textContent = 'Click a square to start the game!'; // add default message text
  document.body.appendChild(message);
    
  // create the "button", add event listener
  const resetButton = document.createElement('button')
  resetButton.textContent = 'Reset'
  resetButton.addEventListener('click', resetGame)

  // Add the 'Reset" button to the page 
  document.body.appendChild(resetButton)




  // Allow players to customize their symbols
const player1SymbolInput = document.createElement('input');
player1SymbolInput.placeholder = 'Player 1 Symbol';
const player2SymbolInput = document.createElement('input');
player2SymbolInput.placeholder = 'Player 2 Symbol';
document.body.appendChild(player1SymbolInput);
document.body.appendChild(player2SymbolInput);

// Add event listeners to the symbol input fields to update the symbols when the inputs change
player1SymbolInput.addEventListener('input', () => {
  player1Symbol = player1SymbolInput.value || 'X';
  player1SymbolEl.textContent = `Player 1 (${player1Symbol}): `;
});

player2SymbolInput.addEventListener('input', () => {
  player2Symbol = player2SymbolInput.value || 'O';
  player2SymbolEl.textContent = `Player 2 (${player2Symbol}): `;
});


let symbolBox = document.createElement('div')
symbolBox.className = 'symbol-box'

let symbolHeart = document.createElement('div')
symbolHeart.className = 'symbol'
symbolHeart.textContent = '❤️'

let symbolStar = document.createElement('div')
symbolStar.className = 'symbol'
symbolStar.textContent = '⭐'

let symbolParty = document.createElement('div')
symbolParty.className = 'symbol'
symbolParty.textContent = '🎉'

let symbolDog = document.createElement('div')
symbolDog.className = 'symbol'
symbolDog.textContent = '🐶'

let symbolCat = document.createElement('div')
symbolCat.className = 'symbol'
symbolCat.textContent = '🐱'

let symbolRainbow = document.createElement('div')
symbolRainbow.className = 'symbol'
symbolRainbow.textContent = '🌈'

let symbolKing = document.createElement('div')
symbolKing.className = 'symbol'
symbolKing.textContent = '👑'

let symbolUnicorn = document.createElement('div')
symbolUnicorn.className = 'symbol'
symbolUnicorn.textContent = '🦄'


document.body.appendChild(symbolBox)
symbolBox.appendChild(symbolHeart)

symbolBox.appendChild(symbolStar)
symbolBox.appendChild(symbolRainbow)
symbolBox.appendChild(symbolKing)
symbolBox.appendChild(symbolCat)
symbolBox.appendChild(symbolDog)
symbolBox.appendChild(symbolParty)
symbolBox.appendChild(symbolUnicorn)




// Create audio element
const audio = new Audio('splat.wav');

const resetAudio = new Audio('break.wav')


let gameMessage = document.createElement("div")

const vsAiButton = document.createElement('button');
vsAiButton.textContent = 'Play against AI';
document.body.appendChild(vsAiButton);
vsAiButton.addEventListener('click', () => {
  vsAI = true;
  player2Symbol = "🤖"; // Set the AI's symbol to the robot
  
  
  gameMessage.innerHTML = ''; // clear previous message
  gameMessage.textContent = "Playing against AI"
  gameMessage.className = "game-message"
  message.appendChild(gameMessage)
});


const vsUserButton = document.createElement('button');
vsUserButton.textContent = 'Play against User';
document.body.appendChild(vsUserButton);
vsUserButton.addEventListener('click', () => {
  vsAI = false;
  
  
  gameMessage.innerHTML = ''; // clear previous message
    gameMessage.textContent = "Playing against user"
    gameMessage.className = "game-message"
    message.appendChild(gameMessage)    
  
  
});





// START FUNCTIONS
// #################

// add a function to update the wins/loss/tie counters in the UI
function updateCounters() {
  player1WinsEl.textContent = `Player 1 Wins: ${player1Wins}`
  player1LossesEl.textContent = `Player 1 Losses: ${player1Losses}`
  player1TiesEl.textContent = `Player 1 Ties: ${player1Ties}`
  player2WinsEl.textContent = `Player 2 Wins: ${player2Wins}`
  player2LossesEl.textContent = `Player 2 Losses: ${player2Losses}` 
  player2TiesEl.textContent = `Player 2 Ties: ${player2Ties}`
}

function updateCountersForGame(winner) {
  if (winner === player1Symbol) {
    player1Wins++
    player2Losses++
  } else if (winner === player2Symbol) {
    player2Wins++
    player1Losses++
  } else {
    player1Ties++
    player2Ties++
  }
  updateCounters()
}

// declr handleCellCick Function 
function handleCellClick(e) {

  
  // Play audio
  audio.currentTime = 0;
  audio.play();

  // check if the game ended early
  if (gameEnded) {
    return; // exit early if the game has ended
  }

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
  console.log(currentPositions);

  // add the current player's symbol to the clicked cell  || puts the symbol into the cell
  cell.textContent = currentSymbol;
  cell.classList.add(`player-${currentSymbol.toLowerCase()}`);
  console.log(currentSymbol);

  // check if the current player has won
  if (checkWin(currentPositions)) {
    //Display a message and end the game
    endGame(`${currentSymbol}`);
  } else if (checkTie()) {
    endGame("It's a tie!");
    return; // exit early if there is a tie
  } else if (vsAI && currentPlayer.symbol === player1Symbol) {
    // If playing against AI and it's the AI's turn, get the best move and update the board
    const cellsArray = [...cells];
    const aiMove = getBestMove(cellsArray.map(cell => cell.textContent), player2Symbol);
        const aiCell = cells[aiMove];
    aiCell.textContent = player2Symbol;
    aiCell.classList.add('player-o');
    player2Positions.push(aiMove);

    // check if the AI has won
    if (checkWin(player2Positions)) {
      //Display a message and end the game
      endGame(`${player2Symbol}`);
    } else if (checkTie()) {
      endGame("It's a tie!");
      return; // exit early if there is a tie
    } else {
      // switch Turn's 
      switchPlayers();
    }
  } else {
    // delay for 1 second and switch turn to player 1
    setTimeout(() => {
      switchPlayers();
    }, 3000);
  }
}



function disableCells() {
    cells.forEach(cell => cell.removeEventListener('click', handleCellClick))

}

// update the message with the current's player's symbol:
function updateMessage() {
  message.textContent = `It's ${getCurrentPlayer().symbol}'s turn.`
}

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

    updateCountersForGame(winner)

    //call to disableCells function to disable further clicks
    disableCells()
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

// define the resetGame function 
function resetGame() {
  // clear all cells on the board 
  cells.forEach(cell => {
    cell.textContent = ''
    cell.addEventListener('click', handleCellClick);
  })

  //Reset game status and player positions 
  player1Positions = [];
  player2Positions = [];
  gameEnded = false;

  //reset message 
  message.textContent = 'Click a square to start the game!'

  //switch to player 1 turn
  currentPlayer = player1Symbol;
  // Reset audio and play
  resetAudio.currentTime = 0;
  resetAudio.play();
}



function getBestMove(state, player) {
  if (checkWin(player1Positions) || checkWin(player2Positions) || checkTie()) {
    // game has ended, return null
    return null;
  }

  const emptyCells = getEmptyCells(state);

  let bestScore = player === player1Symbol ? -Infinity : Infinity;
  let bestMove = null;

  for (let i = 0; i < emptyCells.length; i++) {
    const index = emptyCells[i];
    const newState = [...state];
    newState[index] = player;

    const score = minimax(newState, player, false);

    if ((player === player1Symbol && score > bestScore) || (player === player2Symbol && score < bestScore)) {
      bestScore = score;
      bestMove = index;
    }
  }

  return bestMove;
}


function getEmptyCells(state) {
  const emptyCells = [];
  for (let i = 0; i < state.length; i++) {
    if (state[i] === '') {
      emptyCells.push(i);
    }
  }
  return emptyCells;
}


function minimax(state, player, isMaximizing) {
  if (checkWin(player1Positions)) {
    return -1;
  }
  if (checkWin(player2Positions)) {
    return 1;
  }
  if (checkTie()) {
    return 0;
  }

  const emptyCells = getEmptyCells(state);

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < emptyCells.length; i++) {
      const index = emptyCells[i];
      const newState = [...state];
      newState[index] = player;

      const score = minimax(newState, player, false);
      bestScore = Math.max(bestScore, score);
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < emptyCells.length; i++) {
      const index = emptyCells[i];
      const newState = [...state];
      newState[index] = player === player1Symbol ? player2Symbol : player1Symbol;

      const score = minimax(newState, player, true);
      bestScore = Math.min(bestScore, score);
    }
    return bestScore;
  }
}



updateMessage(); //call to set initial message