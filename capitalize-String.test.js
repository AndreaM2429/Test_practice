const capitalize = require('./capitalize');

// Capitalize the first character of a string
it('Capilalize the first character', () => {
    expect(capitalize('hola')).toMatch(/Hola/);
})