var storage = {
  game: null,
  cancelButton: null,
  loadButton: null,
  saveGame: function() {
    storage.game = document.getElementsByClassName('game')[0].innerHTML;
    localStorage.setItem('game', storage.game);
    localStorage.setItem('columns',Board.columns);
    alert('Game saved');
  },
  loadGame: function() {
    document.getElementsByClassName('game')[0].innerHTML = localStorage.getItem('game');
    Board.rows = localStorage.getItem('columns');
    Board.columns = localStorage.getItem('columns');
  },
  hideLoad: function() {
    document.getElementsByClassName('modalwindow-storage')[0].style.display = 'none';
  },
  loadWindow: function() {
    storage.cancelButton = document.getElementById('cancel');
    storage.loadButton = document.getElementById('load');
    storage.cancelButton.onclick = storage.cancel;
    storage.loadButton.onclick = storage.load;
  },
  cancel: function() {
    localStorage.removeItem('game');
    Window.showModalWindow();
    window.onload();
  },
  load: function() {
    storage.hideLoad();
    Game.init();
    Game.start();
  }
};