// const combineNumbers = (...numbers) => {
//     const combinations = [];
//     for (number of numbers) {
//         combinations.push(number.toString());
//     }
//     for (number in numbers) {
//         console.log('hello');
//         let number2 = number + 1;
//         const length = numbers.length;
//         if (number == length - 1) {
//             break;
//         }
//         console.log(length);
//         while (number2 < length) {
//             combinations.push(numbers[number].toString() + numbers[number2].toString());
//             number2++;
//         }   
//     }
//     console.log(combinations);
// }

// combineNumbers('1', '2');

const combinations = (...numbers) => 
{

    const leftMost = [];
    const inner = [];
    const rightMost = [];
    const combinations = [];
    for (number of numbers) {
        leftMost.push(number.toString());
        combinations.push(number.toString());
    }
    const numbers2 = leftMost;
    for (number of numbers) {
        numbers2.shift();
        for (number2 of numbers2) {
            inner.push(number.toString() + number2.toString());
        }
    }
    rightMost.push(numbers.toString().split(',').join(''));
    for (number of leftMost) {
        combinations.push(number);
    }
    for (number of inner) {
        combinations.push(number);
    }
    for (number of rightMost) {
        combinations.push(number);
    }
    return combinations;
}

console.log('combination() -> ' + combinations(1, 2, 3));

console.log('combination() -> ' + combinations(1, 2, 3, 4));

console.log('combination() -> ' + combinations(11, 22, 33, 44, 55));