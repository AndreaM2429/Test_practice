function stringLength(string) {
    const stringLength = string.length;
    if(stringLength > 1 && stringLength < 10){
        return stringLength
    } else {
        throw Error('Fail: not length conditions approved');
    }
}

module.exports = stringLength