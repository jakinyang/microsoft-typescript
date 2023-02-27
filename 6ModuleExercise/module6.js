"use strict";
/**
 * Generics
 */
function getArray(items) {
    return new Array().concat(items);
}
function getGenericArray(items) {
    return new Array().concat(items);
}
function identityMultiGeneric(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
    return arg1;
}
let returnNumber = identityMultiGeneric(100, 'Hello!');
console.log(returnNumber);
function idGeneric(value, message) {
    let result = '';
    let typeValue = typeof value;
    if (typeof value === 'number') {
        result = value + value;
    }
    else if (typeof value === 'string') {
        result = value + value;
    }
    console.log(`The message ${message} and the function returns a ${typeValue} value of ${result}.`);
    return result;
}
let numberValue = idGeneric(100, 'Hello');
let stringValue = idGeneric('100', 'Hello');
console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100
