/**
 * Generics
 */

function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

function getGenericArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

function identityMultiGeneric<T, U>(arg1: T, arg2: U): T {
  console.log(arg1);
  console.log(arg2);
  return arg1;
}

let returnNumber = identityMultiGeneric<number, string>(100, 'Hello!');

console.log(returnNumber);

type ValidArgTypes = string | number;

function idGeneric<T extends ValidArgTypes, U>(value: T, message: U): ValidArgTypes {
  let result: ValidArgTypes = '';
  let typeValue: string = typeof value;

  if (typeof value === 'number') {
    result = value + value;
  } else if (typeof value === 'string') {
    result = value + value;
  }

  console.log(`The message ${message} and the function returns a ${typeValue} value of ${result}.`);
  
  return result;
}

let numberValue = idGeneric<number, string>(100, 'Hello');
let stringValue = idGeneric<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100

interface Identity<T, U> {
  value: T;
  message: U;
}

let interfaceGeneric: Identity<number, string> = {
  value: 25,
  message: "Hello Typescript!",
}

let otherGeneric: Identity<string, boolean> = {
  value: "Hello again!",
  message: true,
}

interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U): T {
  console.log(message);
  return value;
}

let processor: ProcessIdentity<number, string> = processIdentity;

interface ProcessId<T, U> {
  value: T;
  message: U;
  process(): T;
}

class processId<X, Y> implements ProcessId<X, Y> {
  value: X;
  message: Y;
  constructor(val: X, msg: Y) {
    this.value = val;
    this.message = msg;
  }

  process(): X {
    console.log(this.message);
    return this.value;
  }
}

let processorOfId = new processId<number, string>(100, "Hello TypeScript!");
processorOfId.process()

class Car {
  make: string = 'Generic Car';
  doors: number = 4;
}
class ElectricCar extends Car {
  make = 'Electric Car';
  doors = 4
}
class Truck extends Car {
  make = 'Truck';
  doors = 2
}
function accelerate<T extends Car> (car: T): T {
  console.log(`All ${car.doors} doors are closed.`);
  console.log(`The ${car.make} is now accelerating!`)
  return car
}