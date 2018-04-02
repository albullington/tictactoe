var init = function() {
  changeSquares();
  resetGame();
}
//this and the above function are needed to get multiple event handlers to load
window.onload = init;

//MODEL
var player = {
  turn: 'X',
  currentTurn: 0
};

var gameboardObject = {
	row1: [], 
	row2: [], 
	row3: [],
}

var checkIfBoardFull = function() {
	if (player.currentTurn === 9) {
		return true;
	} 
	return false;
};

var toggleTurn = function(e) {
	if (e.target !== e.currentTarget && e.target.innerHTML === "") {
    if (player.turn === 'X') {
			e.target.innerHTML = "X";
			player.turn = 'O'; 
			player.currentTurn++;
    } else {
    	e.target.innerHTML = "O";
    	player.turn = 'X';
    	player.currentTurn++;
    }
	}
};

// var checkIfLegalMove = function(e) {
// 	if (e.target !== e.currentTarget && e.target.innerHTML === "") {
// 		placePiece();
// 	} else {
// 		console.log('pick a different square');
// 	}
// };

// var placePiece = function() {

// }

//event listeners are below
var changeSquares = function() {
	var gameboard = document.getElementById('gameboard');
	gameboard.addEventListener('click', toggleTurn);
}

var resetGame = function(){
	var button = document.getElementById('reset');
	button.addEventListener('click', function() {
		var square = Array.from(document.getElementsByTagName('td'));
		square.forEach(function(element) {
			element.innerHTML = "";
		});
	});
}

var checkRowForThree = function() {

}

var checkColumnForThree = function() {

}

var checkDiagonalForThree = function() {

}