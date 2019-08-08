Validation = {
  onlyNumbers: function (text) {
    var expOnlyNumber = /^[0-9]+$/;
    if (text.match(expOnlyNumber)) {
      return true;
    } else {
      return false;
    }
  },
  includedNumber: function (firstNumber, secondNumber, number) {
    if (number >= firstNumber && number <= secondNumber) {
      return true;
    } else {
      return false;
    }
  }
};