const digitArray = (number) => {
    const digitArray = [];
    if (Number.isInteger(number)) {
        number = number.toString();
        const length = number.length;
        let len = 0;
        while (len < length) {
            digitArray[len++] = number % 10;
            number = Math.trunc(number /= 10);
        }
    }
    return digitArray.reverse();   
}

console.log('digitArray() -> ', digitArray(123));

console.log('digitArray() -> ', digitArray('a'));

console.log('digitArray() -> ', digitArray('a123'));