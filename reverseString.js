function reverseString(string) {
    const reverseString = [...string].reverse().join('');
    return reverseString;
}

module.exports = reverseString