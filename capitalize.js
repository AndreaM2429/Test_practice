function capitalize(string) { 
    const capitalString = string.split('');
    capitalString[0]= capitalString[0].toUpperCase();
    return capitalString.join('');
}

module.exports = capitalize;