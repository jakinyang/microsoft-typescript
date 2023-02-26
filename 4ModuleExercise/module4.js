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
function addRestNumbers(x, ...restNumbers) {
    let total = x;
    for (let i = 0; i < restNumbers.length; i++) {
        if (isNaN(restNumbers[i])) {
            continue;
        }
        total += Number(restNumbers[i]);
    }
    return total;
}
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
let addThreeNumbers = (x, y, z) => {
    if (z === undefined) {
        return x + y;
    }
    else {
        return x + y + z;
    }
};
console.log(addThreeNumbers(1, 2, 3));
console.log(addThreeNumbers(1, 2));
let calculateNumAdd = (x, y) => x + y;
let calculateNumSubtract = (x, y) => x - y;
console.log(calculateNumAdd(1, 2));
console.log(calculateNumSubtract(5, 3));
let doCalculation = (operation) => {
    if (operation === 'add') {
        return calculateNumAdd;
    }
    else {
        return calculateNumSubtract;
    }
};
console.log(doCalculation('add')(5, 5));
