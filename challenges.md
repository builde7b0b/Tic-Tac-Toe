# Current Challenges: 

- [x]  User Story: 
User can only click on a cell once.
Behavior: User can click on a cell and then cilck again to change selection.
Expected behavior: allow user to click on a cell once, once clicked and assigned a symbol, This cell cannot be cicked again until the game resets.
check if the clicked cell has already been filled either with x or o, if it has then ignore the click.

- [x]  Todo #1: add Function to reset game 
func reset(){
    clear game board
    message: "Game Reset"
    add Event Listner, 'Click'
    createElement(Button) 
}

- [x] Todo #2: Display a message to show who's turn it is.
document.createElement('div')
set textContent = currentPlayer

- [] Todo #3: Leaderboard 
Track Top User's with most wins.
Save Data somewhere(database)

- [] Todo #4: User Story bug
If there's a draw, no message is displayed.
Display a message and reset the board.
behavior: When all cells are filled, nothing happens.
Expected behavior: output message and reset display button to reset game.

Extended: This displays when it's a draw: It's a tie! wins!

- [x] Todo #5: User Story
When we reset the game using the reset button, the message remains from the endGame function.
Solution: //reset message 
  message.textContent = ''

- [x] Todo #6: User Story
When the game is over, the user can still click the cells.
Expected behavior: When a user wins or the game ends, ignore the further clicks on cells and emit a notification that tells a user to reset the game.
Solution: modify the handleCellClick function to disable all cells on the board once the game has ended.


- [x] Todo #7: stats bug
Track rounds, and stats
When we update the counters, we need to be sure to assign key next to each value so we know what we are tracking. 
Current Behavior: Just shows the Number's with no Stat preceding it.
Before we start the game we can see the the name for each counter.

- [x] Todo #8: Customize Symbols Feature
add input field to capture custom symbol 
add event listener with function to change the symbol

- [x] Todo #9: Involve Audio in your game
JS Built in methods for sound/audio
Audio()

- [] Todo #10: Make your site fully responsive so that it is playable from a mobile phone
@media - CSS 
having trouble with grid and getting it to size down according to screens size.

- [] Todo #11: Figure out how to make the grid smaller when we decrease the screen size just like with the stats box.

- [] Create an AI opponent: teach JavaScript to play an unbeatable game against you
Creating an AI opponent seems like a complex task.
We need another player that knows the game board and can respond to any pattern of movements from the other player.
Resources: minimax search, expectimax optimization, MiniMax algorithm

Create AI player
teach player about 
  game board and how to win 

Ai working sort of - Issue: simulates entire game instead of move by move
script.js:566 Uncaught TypeError: cells.map is not a function
    at HTMLButtonElement.startVsAI (script.js:566:33)
check handleCellClick function
handleCellClick function for every empty cell when the computer is playing. This causes the computer to make all the moves by itself, without giving the player a chance to play.
check if the computer is playing and handle the computer's move separately. 


When we click the playing against user button, Display a Text underneath our message that says What type of game we're playing, Vs User or Vs AI?

When we click on our symbol, we want to add it to the clipboard and emit a small toast notification so we know we copied it.

In the Stats box, we need to add a symbol for the ai

When the page loads, we want our message to say "Click a square to start"
Currently: "It's X's Turn.

The AI is currently not that smart at tic tac toe, How can we make it harder to beat?





