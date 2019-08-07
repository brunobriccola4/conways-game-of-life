var Game = {
	next: null,
	play: null,
	board: null,
	cells: null,
	save: null,
	reset: null,
	interval:null,
	init: function () {
		Board.createCells();
		Game.Board = Board.getBoard();
		Game.cells = Board.getCells();
		Game.reset = document.getElementById('reset');
		Game.next = document.getElementById('next');
		Game.play = document.getElementById('play');
		Game.save = document.getElementById('save');

	},
	start: function () {
		for (var i = 0; i < Game.cells.length; i++){
			Game.cells[i].onclick = Cell.toggle;
		}
		Game.next.onclick = Board.nextStep;
		Game.play.onclick = Game.update;
		Game.reset.onclick = Game.resetGame;
		Game.save.onclick = Game.saveGame;
	},
	update: function () {
		if (Game.play.innerHTML === 'Play') {
			Game.interval = setInterval(Board.nextStep, 1000);
			Game.play.innerHTML = 'Stop';// changes button play to stop
			Game.next.disabled = true; //disabled button next
		  } else {
			clearInterval(Game.interval);
			Game.play.innerHTML = 'Play';//changes button stop to play 
			Game.next.disabled = false;//enables button next
		  }
	},
	resetGame: function() {
		Board.createCells();//creates board
		Game.play.innerHTML = 'Stop'; // Play button as stop button
		Game.update(); // Stop the Game
		Game.start(); // Game start
	},
	saveGame: function() {
		Game.play.innerHTML = 'Stop';
		Game.update();
	}
};