# Current Challenges: 

- [] ## User Story: 
User can only click on a cell once.
Behavior: User can click on a cell and then cilck again to change selection.
Expected behavior: allow user to click on a cell once, once clicked and assigned a symbol, This cell cannot be cicked again until the game resets.
check if the clicked cell has already been filled either with x or o, if it has then ignore the click.

- [] ## Todo #2: add Function to reset game 
func reset(){
    clear game board
    message: "Game Reset"
    add Event Listner, 'Click'
    createElement(Button) 
}

- [] ## Todo #1: Display a message to show who's turn it is.
document.createElement('div')
set textContent = currentPlayer

- [] ## Todo #3: Leaderboard 
Track Top User's with most wins.
Save Data somewhere(database)

