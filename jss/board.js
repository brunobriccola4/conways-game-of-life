var Board = {
	rows: 5,
	columns: 5,
	getBoard: function () {
		return document.getElementsByClassName('board')[0];
	},
	getCells: function () {
		var board = Board.getBoard();
		return board.getElementsByTagName('li');
	},
	dynamicBoard: function () {
		var board = Board.getBoard();
		var calculation = Board.rows * 26;
		board.style.height = calculation + 'px';
		board.style.width = calculation + 'px';
	},
	getAliveCells: function () {
		return document.getElementsByClassName('alive');
	},
	createCells: function () {
		var board = Board.getBoard();
		var html = '';
		for (var i = 0; i < (Board.rows * Board.columns); i++) {
			html += '<li></li>'
		}
		board.innerHTML = html;
	},
	updateCells: function (boardJS) {
		var board = Board.getBoard();
		var html = '';
		for (var i = 0; i < Board.rows; i++) {
			for (var j = 0; j < Board.columns; j++) {
				if (boardJS[i][j]) {
					html += '<li class="alive"></li>'
				} else {
					html += '<li></li>'
				}
			}
		}
		board.innerHTML = html;
	},
	nextStep: function () {
		var boardHTML = Board.getCells();
		var currentBoard = GameOfLife.getBoardFromHTML(boardHTML, Board.columns);
		var newBoard = GameOfLife.createEmptyBoard(Board.rows, Board.columns);
		GameOfLife.getNextStep(currentBoard, newBoard);
		Board.updateCells(newBoard);
	},
	reset: function () {
		Board.createCells();
		Game.play.innerHTML = 'Stop'; // Play button as stop button
		Game.update(); // Stop the Game
		Game.start(); // Game start
	}
};