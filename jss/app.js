var Play = function() {
	var liAlives = Board.getCells();
	Board.updateCells(liAlives)
}

var init = function() {
	if(localStorage.getItem('game' != null)) 
	{
		Window.hideModalWindow();
		storage.loadWindow();
	} else {
		storage.hideLoad();
		Window.Accept()
		Window.InputFocus();
	}
}
window.onload = init; 


