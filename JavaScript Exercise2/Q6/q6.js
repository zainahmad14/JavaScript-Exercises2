const extractValue = (array, index) => {
    if (index < array.length && index >= 0) {
       return array[index];
    }
    return '';
}

console.log('extractValue() -> ' + extractValue('abcde', 2));

console.log('extractValue() -> ' + extractValue('abcde', 4));

console.log('extractValue() -> ' + extractValue('abcde', 0));

console.log('extractValue() -> ' + extractValue('abcde', -2));

console.log('extractValue() -> ' + extractValue('abcde', 7));