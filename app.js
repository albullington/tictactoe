var init = function() {
  changeSquares();
  resetGame();
}
//this and the above function are needed to get multiple event handlers to load
window.onload = init;

var game = {
  player: 'X',
  currentTurn: 0
};

//game logic
var isLegalMove = function(e) {
	if (e.target !== e.currentTarget && e.target.innerHTML === "") {
		return true;
	}
};

var togglePlayer = function() {
	if (game.player === 'X') {
  	game.player = 'O';
  } else {
  	game.player = 'X';
  }
}

var placePiece = function(e) {
  if (isLegalMove(e)) {
		e.target.innerHTML = game.player;
		togglePlayer();
		isWinnerPossible();
    game.currentTurn++;
  }
}

//event listeners are below
var changeSquares = function() {
	var gameboard = document.getElementById('gameboard');
	gameboard.addEventListener('click', placePiece);
}

var resetGame = function(){
	var button = document.getElementById('reset');
	button.addEventListener('click', function() {
		var square = Array.from(document.getElementsByTagName('td'));
		square.forEach(function(element) {
			element.innerHTML = "";
		});
	});
};

var isWinnerPossible = function() {
	if (game.currentTurn >= 3) {
		announceWinner('X');
		announceWinner('O');
		return true;
	}
};

var selectSquareText = function(number) {
	return document.getElementById("square" + number).innerHTML;
}

var checkForThree = function(a, b, c, player) {
  if (isWinnerPossible) {
  	if (selectSquareText(a) === player && selectSquareText(b) === player && selectSquareText(c) === player) {
  		window.alert('Player ' + player + ' is the winner');
  	}
  }
}

var announceWinner = function(player) {
	checkForThree(1, 2, 3, player);
	checkForThree(4, 5, 6, player);
	checkForThree(7, 8, 9, player);
	checkForThree(1, 4, 7, player);
	checkForThree(2, 5, 8, player);
	checkForThree(3, 6, 9, player);
  checkForThree(1, 5, 9, player);
	checkForThree(3, 5, 7, player);
}