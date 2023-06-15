const reverseString = require('./reverseString');

// Reverse a string
it('Reverse string 1', () => {
    // Arrange
    const string = 'amor';

    // Act
    const reverse = reverseString(string);

    // Assert
    expect(reverse).toMatch(/roma/);
})

it('Reverse string 2', () => {
    const string = 'perro';

    const reverse = reverseString(string);

    expect(reverse).toMatch(/orrep/);
})