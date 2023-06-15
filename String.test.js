const stringLength = require('./String');

// Know the length of a string
it('String length 1', () => {
    //Arrange
    const string = 'Hello';

    //Act
    const length = stringLength(string);

    //Assert
    expect(length).toBe(5);
})

it('String length 2', () => {
    const string = 'Cat';

    const length = stringLength(string);

    expect(length).toBe(3);
})

it('String length 3', () => {
    const string = 'Potato';

    const length = stringLength(string);

    expect(length).toBe(6);
})

// Return an error when the length is lees than 1 and more than 10
it('Not string length conditions approved', () => {
    const string = 'Hello Cats';
    
    expect(() => stringLength(string)).toThrow();
})
