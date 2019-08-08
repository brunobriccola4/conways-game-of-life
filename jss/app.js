var play = function () {
	var cells = Board.getCells();
	Board.updateCells(cells);
}
var init = function () { // Its execute after loading the HTML
	if (localStorage.getItem('game') != null) {
		Window.hideModalWindow();
		Storage.loadWindow();
	} else {
		Storage.hideLoad();
		Window.Accept();
		Window.InputFocus();
	}
}
window.onload = init;