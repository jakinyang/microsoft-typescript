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
random = {a: "John", b: "Cena"}
console.log(random.name)
console.log(random.a)