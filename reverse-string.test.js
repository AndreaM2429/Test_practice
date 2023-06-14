const reverseString = require('./reverseString');

// Reverse a string
it('Reverse string 1', () => {
    expect(reverseString('amor')).toMatch(/roma/);
})

it('Reverse string 2', () => {
    expect(reverseString('perro')).toMatch(/orrep/);
})