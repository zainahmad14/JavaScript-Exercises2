const colorCode = () => {
    const dec1 = decimalToHexadecimal(Math.floor((Math.random() * 256)));
    const dec2 = decimalToHexadecimal(Math.floor((Math.random() * 256)));
    const dec3 = decimalToHexadecimal(Math.floor((Math.random() * 256)));
    let colorCode = '#';
    if (dec1.length > 1) {
        colorCode += dec1;
    } else {
        colorCode += '0' + dec1;
    }
    if (dec2.length > 1) {
        colorCode += dec2;
    } else {
        colorCode += '0' + dec2;
    }
    if (dec3.length > 1) {
        colorCode += dec3;
    } else {
        colorCode += '0' + dec3;
    }
    return  colorCode;
}
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

console.log('colorCode() -> ' + colorCode());

console.log('colorCode() -> ' + colorCode());

console.log('colorCode() -> ' + colorCode());