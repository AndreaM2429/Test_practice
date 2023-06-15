const Calculator = require('./Calculator');

// Calculator testing add method
describe('Calculator add method', () => {
    it('Add 2 + 5', () => {
        // Arrange
        const calculator = new Calculator(2,5);

        // Act
        const addMethod = calculator.add();

        // Assert
        expect(addMethod).toBe(7);
    })

    it('Add -8 + 50', () => {
        const calculator = new Calculator(-8,50);

        const addMethod = calculator.add();

        expect(addMethod).toBe(42);
    })

    it('Add 22 + 32', () => {
        const calculator = new Calculator(22,32);

        const addMethod = calculator.add();

        expect(addMethod).toBe(54);
    })
})

// Calculator testing subtract method
describe('Calculator subtract method', () => {
    it('subtract 87 - 52', () => {
        const calculator = new Calculator(87,-52);

        const subtractMethod = calculator.subtract();

        expect(subtractMethod).toBe(139);
    })

    it('subtract -8 - 568', () => {
        const calculator = new Calculator(-8,568);

        const subtractMethod = calculator.subtract();

        expect(subtractMethod).toBe(-576);
    })

    it('subtract 22 - 32', () => {
        const calculator = new Calculator(22,32);

        const subtractMethod = calculator.subtract();
        
        expect(subtractMethod).toBe(-10);
    })
})

// Calculator divide add method
describe('Calculator divide method', () => {

    it('divide 2 / 5', () => {
        const calculator = new Calculator(2,5);

        const divideMethod = calculator.divide();

        expect(divideMethod).toBe(0.4);
    })

    it('divide 0 / 5000', () => {
        const calculator = new Calculator(0,5000);

        const divideMethod = calculator.divide();

        expect(divideMethod).toBe(Infinity);
    })

    it('divide 22 / 0', () => {
        const calculator = new Calculator(22,0);

        const divideMethod = calculator.divide();
        
        expect(divideMethod).toBe(Infinity);
    })
})

// Calculator testing multiply method
describe('Calculator multiply method', () => {
    it('multiply 2 * 5', () => {
        const calculator = new Calculator(2,5);

        const multiplyMethod = calculator.multiply();

        expect(multiplyMethod).toBe(10);
    })
    it('multiply -8 * 50', () => {
        const calculator = new Calculator(-8,50);

        const multiplyMethod = calculator.multiply();

        expect(multiplyMethod).toBe(-400);
    })
    it('multiply 22 * 0', () => {
        const calculator = new Calculator(22,0);

        const multiplyMethod = calculator.multiply();
        
        expect(multiplyMethod).toBe(0);
    })
})
