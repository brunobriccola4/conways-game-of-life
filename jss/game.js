var Game = {
	next: null,
	play: null,
	board: null,
	cells: null,
	save: null,
	interval:null,
	init: function () {
		Board.createCells();
		Game.Board = Board.getBoard();
		Game.cells = Board.getCells();
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

		
	},
	update: function () {
		if (Game.play.innerHTML === 'Play') {
			Game.interval = setInterval(Board.nextStep, 1000);
			Game.play.innerHTML = 'Stop';
			Game.next.disabled = true;
		  } else {
			clearInterval(Game.interval);
			Game.play.innerHTML = 'Play';
			Game.next.disabled = false;
		  }
	}
};