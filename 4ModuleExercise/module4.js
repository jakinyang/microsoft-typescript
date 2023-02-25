"use strict";
function addNumbers(x, y) {
    return x + y;
}
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
