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
