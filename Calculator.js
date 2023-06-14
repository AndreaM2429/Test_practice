class Calculator {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
  }

  add() {
    return this.number1 + this.number2;
  }

  subtract() {
    return this.number1 - this.number2;
  }

  divide() {
    if (this.number1 !== 0){
     return this.number1 / this.number2;
    } else {
      return Infinity;
    }
  }

  multiply() {
    return this.number1 * this.number2;
  }
}

module.exports = Calculator