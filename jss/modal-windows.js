var Window = {
  accept: null,
  number: 0,
  getAccept: function () {
    return document.getElementById('accept');
  },
  getNumberFromInput: function () {
    return document.getElementById('cellnumber').value;
  },
  createDivValidation: function () {
    var formCells = document.getElementsByClassName('formCells')[0]; // Div with class formCells
    var Validation = document.createElement("div"); // New node, element div
    Validation.className = 'validation';
    var parentDiv = formCells.parentNode; // Parent of formCells
    parentDiv.insertBefore(Validation, formCells); // Add node validation to HTML
    Validation.innerHTML = 'Enter a <strong>&nbsp;"number"&nbsp;</strong> between <strong>&nbsp;"5 and 20"&nbsp;</strong>';
  },
  deleteDivValidation: function () {
    var validationDiv = document.getElementsByClassName('validation')[0];
    var parentDiv = validationDiv.parentNode; // Parent of Validation
    parentDiv.removeChild(validationDiv); // Add node validation to HTML
  },
  hideValidation: function () {
    var validationDiv = document.getElementsByClassName('validation')[0];
    if (document.getElementsByClassName('validation')[0] !== undefined) {
      Window.deleteDivValidation();
    }
  },
  hideModalWindow: function () {
    document.getElementsByClassName('modalwindow')[0].style.display = 'none';
  },
  showModalWindow: function () {
    document.getElementsByClassName('modalwindow')[0].style.display = 'flex';
  },
  InputFocus: function () {
    var input = document.getElementById('cellnumber');
    input.onfocus = Window.hideValidation;
  },
  Accept: function () {
    Window.accept = Window.getAccept();
    Window.accept.onclick = Window.setBoardDimension;
  },
  setBoardDimension: function () {
    Window.number = Window.getNumberFromInput();
    var onlyNumbers = Validation.onlyNumbers(Window.number);
    var includedNumber = Validation.includedNumber(5, 20, Window.number);
    if (onlyNumbers && includedNumber) {
      Window.hideModalWindow(); // Hide modal window
      Board.rows = Window.number; // Set the number of rows of the board equal input number
      Board.columns = Window.number; // Set the number of colums of the board equal input number
      Game.init(); // init the game
      Game.start(); // start the game
    } else {
      if (document.getElementsByClassName('validation')[0] === undefined) { // If the div doesnt exist
        Window.createDivValidation(); // Create and insert a div with the validation
      }
    }
  }
};
var Window = {
  accept: null,
  number: 0,
  getAccept: function () {
    return document.getElementById('accept');
  },
  getNumberFromInput: function () {
    return document.getElementById('cellnumber').value;
  },
  createDivValidation: function () {
    var formCells = document.getElementsByClassName('formCells')[0]; // Div with class formCells
    var Validation = document.createElement("div"); // New node, element div
    Validation.className = 'validation';
    var parentDiv = formCells.parentNode; // Parent of formCells
    parentDiv.insertBefore(Validation, formCells); // Add node validation to HTML
    Validation.innerHTML = 'Enter a <strong>&nbsp;"number"&nbsp;</strong> between <strong>&nbsp;"5 and 20"&nbsp;</strong>';
  },
  deleteDivValidation: function () {
    var validationDiv = document.getElementsByClassName('validation')[0];
    var parentDiv = validationDiv.parentNode; // Parent of Validation
    parentDiv.removeChild(validationDiv); // Add node validation to HTML
  },
  hideValidation: function () {
    var validationDiv = document.getElementsByClassName('validation')[0];
    if (document.getElementsByClassName('validation')[0] !== undefined) {
      Window.deleteDivValidation();
    }
  },
  hideModalWindow: function () {
    document.getElementsByClassName('modalwindow')[0].style.display = 'none';
  },
  showModalWindow: function () {
    document.getElementsByClassName('modalwindow')[0].style.display = 'flex';
  },
  InputFocus: function () {
    var input = document.getElementById('cellnumber');
    input.onfocus = Window.hideValidation;
  },
  Accept: function () {
    Window.accept = Window.getAccept();
    Window.accept.onclick = Window.setBoardDimension;
  },
  setBoardDimension: function () {
    Window.number = Window.getNumberFromInput();
    var onlyNumbers = Validation.onlyNumbers(Window.number);
    var includedNumber = Validation.includedNumber(5, 20, Window.number);
    if (onlyNumbers && includedNumber) {
      Window.hideModalWindow(); // Hide modal window
      Board.rows = Window.number; // Set the number of rows of the board equal input number
      Board.columns = Window.number; // Set the number of colums of the board equal input number
      Game.init(); // init the game
      Game.start(); // start the game
    } else {
      if (document.getElementsByClassName('validation')[0] === undefined) { // If the div doesnt exist
        Window.createDivValidation(); // Create and insert a div with the validation
      }
    }
  }
};