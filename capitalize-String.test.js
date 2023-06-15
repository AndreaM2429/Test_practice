const capitalize = require('./capitalize');

// Capitalize the first character of a string
it('Capilalize the first character', () => {
    // Arrange
    const string = 'hola';

    // Act
    const capitalizeString = capitalize(string);

    // Assert
    expect(capitalizeString).toMatch(/Hola/);
})