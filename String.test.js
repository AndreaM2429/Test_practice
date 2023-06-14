const stringLength = require('./String');

// Know the length of a string
it('String length 1', () => {
    expect(stringLength('Hello')).toBe(5);
})

it('String length 2', () => {
    expect(stringLength('Cat')).toBe(3);
})

it('String length 3', () => {
    expect(stringLength('Potato')).toBe(6);
})

// Return an error when the length is lees than 1 and more than 10
it('Not string length conditions approved', () => {
    expect(() => stringLength('Hello Cats')).toThrow();
})
