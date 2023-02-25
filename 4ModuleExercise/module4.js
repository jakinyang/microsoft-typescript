"use strict";
// function addNumbers(x: number, y: number): number {
//   return x + y;
// }
console.log(addNumbers(1, 2));
console.log(sum([1, 2, 3]));
function displayAlert(message) {
    alert(`The message is ${message}`);
}
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(1, 2));
function addOptionalNumbers(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
console.log(addOptionalNumbers(1, 2));
console.log(addOptionalNumbers(2));
function addDefaultNumbers(x, y = 25) {
    return x + y;
}
console.log(addDefaultNumbers(1, 2));
console.log(addDefaultNumbers(1));
