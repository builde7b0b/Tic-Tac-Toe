
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
    cell.dataset.index = i;

    container.appendChild(cell)

}

document.body.appendChild(container)