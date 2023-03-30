# Current Challenges: 

- [x]  User Story: 
User can only click on a cell once.
Behavior: User can click on a cell and then cilck again to change selection.
Expected behavior: allow user to click on a cell once, once clicked and assigned a symbol, This cell cannot be cicked again until the game resets.
check if the clicked cell has already been filled either with x or o, if it has then ignore the click.

- [x]  Todo #2: add Function to reset game 
func reset(){
    clear game board
    message: "Game Reset"
    add Event Listner, 'Click'
    createElement(Button) 
}

- [x] Todo #1: Display a message to show who's turn it is.
document.createElement('div')
set textContent = currentPlayer

- [] Todo #3: Leaderboard 
Track Top User's with most wins.
Save Data somewhere(database)

- [] Todo #4: User Story
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


