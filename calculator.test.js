const Calculator = require('./Calculator');

// Calculator testing add method
describe('Calculator add method', () => {
    it('Add 2 + 5', () => {
        const calculator = new Calculator(2,5);
        expect(calculator.add()).toBe(7);
    })

    it('Add -8 + 50', () => {
        const calculator = new Calculator(-8,50);
        expect(calculator.add()).toBe(42);
    })

    it('Add 22 + 32', () => {
        const calculator = new Calculator(22,32);
        expect(calculator.add()).toBe(54);
    })
})

// Calculator testing subtract method
describe('Calculator subtract method', () => {
    it('subtract 87 - 52', () => {
        const calculator = new Calculator(87,-52);
        expect(calculator.subtract()).toBe(139);
    })

    it('subtract -8 - 568', () => {
        const calculator = new Calculator(-8,568);
        expect(calculator.subtract()).toBe(-576);
    })

    it('subtract 22 - 32', () => {
        const calculator = new Calculator(22,32);
        expect(calculator.subtract()).toBe(-10);
    })
})

// Calculator divide add method
describe('Calculator divide method', () => {
    //Failure message: Math error: division by zero

    it('divide 2 / 5', () => {
        const calculator = new Calculator(2,5);
        expect(calculator.divide()).toBe(0.4);
    })
    it('divide 0 / 5000', () => {
        const calculator = new Calculator(0,5000);
        expect(calculator.divide()).toBe(Infinity);
    })
    it('divide 22 / 0', () => {
        const calculator = new Calculator(22,0);
        expect(calculator.divide()).toBe(Infinity);
    })
})

// Calculator testing multiply method
describe('Calculator multiply method', () => {
    it('multiply 2 * 5', () => {
        const calculator = new Calculator(2,5);
        expect(calculator.multiply()).toBe(10);
    })
    it('multiply -8 * 50', () => {
        const calculator = new Calculator(-8,50);
        expect(calculator.multiply()).toBe(-400);
    })
    it('multiply 22 * 0', () => {
        const calculator = new Calculator(22,0);
        expect(calculator.multiply()).toBe(0);
    })
})
