const filterArray = (array, filterValues) => {
    let array2 = array;
    for (value of filterValues) {
        if (array2.indexOf(value) > 0) {
            array2 = array2.substring(0, array2.indexOf(value)) + array2.substring(array2.indexOf(value) + 1);
        } else {
            array2 = array2.slice(1);
        }       
    }
    return array2;
}

console.log('filterArray() -> ', filterArray('abcd', 'a'));

console.log('filterArray() -> ', filterArray('abcd', 'd'));

console.log('filterArray() -> ', filterArray('abcd', 'bc'));