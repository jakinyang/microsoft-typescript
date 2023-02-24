"use strict";
/*
* Number
*/
let x;
let y = 1;
let z = 100n;
/*
* Boolean
*/
let flag;
let yes = true;
let no = false;
flag = no;
/*
String
*/
let s;
let empty = "";
let abc = 'abc';
const firstName = "John";
const lastName = "Cena";
const sentence = `My name is ${firstName} ${lastName}`;
/*
* Enum
*/
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Permanent;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
/*
* Any
*/
let random = 10;
random = "John Cena";
random = true;
random = { a: "John", b: "Cena" };
console.log(random.name);
console.log(random.a);
/*
* Union Types
*/
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add('one', 2)); //* Returns error
