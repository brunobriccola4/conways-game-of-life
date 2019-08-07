var GameOfLife = {
	createEmptyBoard: function(rows, cols) {
	  var newBoard = [];
	  for (var i = 0; i < rows; i++) {
		var row = [];
		for (var j = 0; j < cols; j++) {
		  row.push(false);
		}
		newBoard.push(row);
	  }
	  return newBoard;
	},
	getBoardFromHTML: function(cells, cols) {
	  var board = [];
	  var row = [];
	  for (var i = 0; i < cells.length; i++) {
			var cell = cells[i];
			var isAlive = cell.className === 'alive'; // Return false or true
			row.push(isAlive);
			if (i % cols === (cols - 1)) { // If i mod 5 equal to 4 => when mod === 4, 5 cells inside the array row.
		  	board.push(row); // Push of array
		  	row = []; // Empty the array
			}
	  }
	  return board;
	},
	getNextStep: function(a, b) { // a=current board b=new board
	  for (var i = 0; i < a.length; i++) {
		var row = a[i];
		for (var j = 0; j < row.length; j++) {
		  var willBeAlive = GameOfLife.applyRule(a, i, j);
		  if (willBeAlive) {
				b[i][j] = true;
		  	}
			}
	  }
	},
	applyRule: function(board, posX, posY) {
	  var cell = board[posX][posY];
	  var count = 0;
	  if (board[posX - 1] && board[posX - 1][posY - 1])
		++count;
	  if (board[posX - 1] && board[posX - 1][posY])
		++count;
	  if (board[posX - 1] && board[posX - 1][posY + 1])
		++count;
	  if (board[posX] && board[posX][posY - 1])
		++count;
	  if (board[posX] && board[posX][posY + 1])
		++count;
	  if (board[posX + 1] && board[posX + 1][posY - 1])
		++count;
	  if (board[posX + 1] && board[posX + 1][posY])
		++count;
	  if (board[posX + 1] && board[posX + 1][posY + 1])
		++count;
	  if (!cell) {
			if (count === 3) {
		  	return true;
			}
	  }
	  if (cell) {
			if (count < 2) {
		  	return false;
			}
			if (count === 2 || count === 3) {
		  	return true;
			}
			if (count > 3) {
		  	return false;
			}
	  }
	}
};