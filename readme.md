# Tic Tac Toe Game

## Description
This is a simple implementation of a Tic Tac Toe game. The game can be played by two players, with Player 1 taking X's and Player 2 taking O's. The game is played on a 3x3 grid.

## Table of Contents
* Wireframe
* Installation
* Usage
* User Stories
* User Stories - Psuedo Logic
* Psuedo Logic

## Wireframe
![Wireframe](wireframe.png)

## Bronze MVP
![Bronze MPV](bronze.png)

### Features
*  Start a new tic tac toe game VS Another player
*  play the game again without refreshing the page
*  Display a message to Winner and On Every Turn,

## Silver MVP
![Silver](silver.png)

### Features
* Keep track of multiple game rounds
* Players can customize their token Symbols
* Audio Effects
* Enhanced Styling
* Copy Paste Custom Symbols
* Create an AI opponent

## Installation

To use this Tic Tac Toe game, simply download the files or clone the repository to your local machine.

## Usage

To start a new game, open the index.html file in your web browser. The game board will be displayed on the page.

Click on any square to place your X or O. The game will automatically switch between Player 1 and Player 2.

After each turn, a message will be displayed to indicate if someone has won, lost, or tied. The game will also display whose turn it is next.

If you try to click on a square that has already been played, you will receive an error message and will not be able to make the move.

Once the game is over, you can play again by clicking the "Play Again" button.

## User Stories

* As a user, I should be able to start a new tic tac toe game
* As a user, I should be able to click on a square to add X first and then O, and so on
* As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
* As a user, I should not be able to click the same square twice
* As a user, I should be shown a message when I win, lose or tie
* As a user, I should not be able to continue playing once I win, lose, or tie
* As a user, I should be able to play the game again without refreshing the page

## User Stories - Psuedo Logic
```
* Start game > Click Button 
* First Turn > Event Listener > Square(Div)
*   forEach Turn, Func CheckWin, print message(win, lose, tie, current turn)
    * If Square, has already been clicked, remove event listner from square[index]
    * func checkWin > print win, lose, tie
    * If GameOver === true, remove event listener from all squares or render unclickable.
        print must reset game
* reset game > ButtonClick > StartNewGame()
```

## Psuedo Logic

The game logic is based on the following psuedo code:
```
// Render the game board
// Create a 3x3 grid of divs and append them to the DOM
// Add a click event listener to each cell to handle player moves

// Initialize player symbols and positions
// let player1Symbol = 'X'
// let player2Symbol = 'O'
// let player1Positions = []
// let player2Positions = []

* get each spot in the grid.
    * grid = array of divs
    * loop through array to track each position on the board
* Set conditions for winning
    * If player1 positions
        * 3 x's in a row
        * In any direction
        * player1 Wins
    * Else if player2 positions
        * 3 o's in a row
        * in any direction
        * player 2 wins

// Game logic - Detailed
// When a player clicks a cell, add their position to their respective array
// Check if the player has won by comparing their positions to winning combinations
    // If the player has won, display a message and end the game
// If the board is full and no player has won, display a tie message and end the game
// If the game has not ended, switch to the other player's turn and continue playing

// Set conditions for winning
// Winning combinations:
    // Row 1: [0, 1, 2]
    // Row 2: [3, 4, 5]
    // Row 3: [6, 7, 8]
    // Column 1: [0, 3, 6]
    // Column 2: [1, 4, 7]
    // Column 3: [2, 5, 8]
    // Diagonal 1: [0, 4, 8]
    // Diagonal 2: [2, 4, 6]
    // To check for a win, compare the player's positions to each of these combinations
    // If the player's positions match a winning combination, they have won

```

## Technologies Used 
* HTML / CSS / Javascript

## Development Process / Plan
[Link to Planning & MVP Dev Schedule](planning.md)


## Problem-Solving Strategy, Challenges and Unsolved Issues
[Link to Challenges and Task List for Updates and Features](challenges.md)

## How I Solved For the Winner
In a game of tic tac toe, there are only 8 possible ways to win: 3 rows, 3 columns, and 2 diagonals. 

To determine if there is a winner, we need to check if any of these 8 possible winning combinations have been achieved by a player.

### Steps: 
* Define an array of all possible winning combinations.
* Loop through the winConditions array and check if any of the values in the squares array match the winning combination for the current player.
* Call the checkForWinner function for each player (i.e. "X" and "O") and check if they have won the game.



## Favorite Functions
handleCellClick() is an important function in the Tic Tac Toe app. This function is called whenever a player clicks on a cell in the game board. 

### Here's how it works:

* It starts by playing an audio sound to give feedback to the user that a cell has been clicked.

* Next, it checks if the game has already ended. If it has, the function returns and the click is ignored.

* The function then gets the index of the clicked cell and checks if the cell is already occupied. If it is, the function returns and the click is ignored.

* The function then gets the current player's symbol and positions array.

* The function adds the clicked cell's index to the current player's positions array.

* The function puts the current player's symbol into the clicked cell.

* The function checks if the current player has won by calling the checkWin() function. If the current player has won, the game ends and the winner is displayed.

* If the game has not ended, the function checks if there is a tie by calling the checkTie() function. If there is a tie, the game ends and a tie message is displayed.

* If the game has not ended and the current player is playing against the AI, the AI makes a move and the game board is updated accordingly. If the AI has won, the game ends and the winner is displayed.

* If the game has not ended, the function switches to the other player's turn and updates the message to display who's turn it is.