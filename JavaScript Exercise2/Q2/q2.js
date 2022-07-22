const array = (string) => {
    const newArray = [];
    let string2 = string;
    let index = 0;
    if (string.length > 0 && string[0] != ',') {
        for (match of string.match(/,/g)) {
            newArray[index++] = string2.substring(0, string2.indexOf(','));
            string2 = string2.slice(string2.indexOf(',') + 1);
        }
        if (string2.length > 0) {
            newArray[index++] = string2.substring(0);
        }
    }
    return newArray;
};

console.log('array() -> ', array('a,bccd,a'));

console.log('array() -> ', array(''));

console.log('array() -> ', array(',a'));