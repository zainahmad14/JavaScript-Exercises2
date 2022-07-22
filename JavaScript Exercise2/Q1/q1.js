const decimalToHexadecimal = (decimal) => {
    const hexaDecimal = [];
    while (decimal > 15) {
        hexaDecimal.push(decimal % 16 );
        decimal = Math.trunc(decimal / 16);
    }
    hexaDecimal.push(decimal % 16 );
    for (value in hexaDecimal) {
        if (hexaDecimal[value] == 10) {
            hexaDecimal[value] = 'A';
        } else if (hexaDecimal[value] == 11) {
            hexaDecimal[value] = 'B';
        } else if (hexaDecimal[value] == 12) {
            hexaDecimal[value] = 'C';
        } else if (hexaDecimal[value] == 13) {
            hexaDecimal[value] = 'D';
        } else if (hexaDecimal[value] == 14) {
            hexaDecimal[value] = 'E';
        } else if (hexaDecimal[value] == 15) {
            hexaDecimal[value] = 'F';
        }
    }
    let hexaDecimalString = '';
    for (value of hexaDecimal) {
        hexaDecimalString += value;
    }
    return hexaDecimalString;
}

console.log('decimalToHexadecimal() -> ' + decimalToHexadecimal(255));

console.log('decimalToHexadecimal() -> ' + decimalToHexadecimal(0));

console.log('decimalToHexadecimal() -> ' + decimalToHexadecimal(85));

console.log('decimalToHexadecimal() -> ' + decimalToHexadecimal(177));