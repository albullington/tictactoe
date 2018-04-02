//put the game logic in here

//MODEL
//create a player class, instantiate player X and player O
  // begin the model with X since player X is always the first move
  // X and O alternate

//rules for the game
  //similar to nQueens - check for three X's or three O's in a row
  		//horizontal
  		//diagonal
  		//vertical
  //if there's a match, trigger an alert that says "winner is player Z"

//CONTROLLER - all requests go here
//set up an event listener that understands player click
  //should send instructions to model to carry out logic
  	//logic: place appropriate letter on board
  	//toggle to next letter (X, then O)
  //should send instructions to view to update the interface based on model/logic
var player = 1;

window.onload=function() {
	var gameboard = document.getElementById('gameboard');
		var addX = function(e) {
			if (e.target !== e.currentTarget) {
        if (player === 1) {
					e.target.innerHTML = "X";
					player = 0; 
        } else {
        	e.target.innerHTML = "O";
        	player = 1;
        }
			}
		}
		gameboard.addEventListener('click', addX);
}

//set up second event listener for button
  // button resets game for new round of gameplay
  		// this sets the model back to X as the first letter
  		// it also clears the board

//VIEW
//display winner alert to players
//display X's and O's on board

