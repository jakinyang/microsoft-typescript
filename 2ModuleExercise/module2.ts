/* 
* Number
*/
let x: number;
let y = 1;
let z: bigint = 100n;

/* 
* Boolean
*/
let flag: boolean;
let yes = true;
let no = false
flag = no;

/* 
String
*/
let s: string;
let empty = "";
let abc = 'abc';

const firstName: string = "John";
const lastName: string = "Cena";
const sentence: string = `My name is ${firstName} ${lastName}`

/* 
* Enum
*/
enum ContractStatus {
  Permanent,
  Temp,
  Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Permanent;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

/* 
* Any
*/
let random: any = 10;
random = "John Cena";
random = true;
random = { a: "John", b: "Cena" }
console.log(random.name)
console.log(random.a)

/*
* Union Types
*/
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid

function add(x: number | string, y: number | string) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  if (typeof x === 'string' && typeof y === 'string') {
    return x.concat(y);
  }
  throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
// console.log(add('one', 2));      //* Returns error

/* 
* Literal
*/

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
// myResult = "failure";       //* Invalid

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
// diceRoll = 7;    //* Invalid
