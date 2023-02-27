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

let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100