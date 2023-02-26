// function addNumbers(x: number, y: number): number {
//   return x + y;
// }

console.log(addNumbers(1, 2));

console.log(sum([1, 2, 3]));

function displayAlert(message: string) {
  alert(`The message is ${message}`);
}

function sum(input: number[]): number {
  let total: number = 0;
  for (let count = 0; count < input.length; count++) {
    if (isNaN(input[count])) {
      continue;
    }
    total += Number(input[count]);
  }
  return total;
}

function addNumbers(x: number, y: number): number {
  return x + y;
}

console.log(addNumbers(1, 2));

function addOptionalNumbers(x: number, y?: number): number {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}

console.log(addOptionalNumbers(1, 2))
console.log(addOptionalNumbers(2))

function addDefaultNumbers(x: number, y: number = 25): number {
  return x + y;
}
console.log(addDefaultNumbers(1, 2));
console.log(addDefaultNumbers(1));

function addRestNumbers(x: number, ...restNumbers: number[]): number {
  let total: number = x;
  for (let i = 0; i < restNumbers.length; i++) {
    if (isNaN(restNumbers[i])) {
      continue;
    }
    total += Number(restNumbers[i]);
  } return total
}

interface Message {
  text: string;
  sender: string;
}

function displayMessage({ text, sender }: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: 'Christopher', text: 'hello, world' });

let addThreeNumbers = (x: number, y: number, z?: number): number => { 
  if (z === undefined) {
    return x + y;
  } else {
    return x + y + z; 
  }
};

console.log(addThreeNumbers(1, 2, 3));
console.log(addThreeNumbers(1, 2));

// type calculator = (x: number, y: number) => number;
interface calculator {
  (x: number, y: number): number;
}

let calculateNumAdd: calculator = (x: number, y: number): number => x + y;
let calculateNumSubtract: calculator = (x: number, y: number): number => x - y;

console.log(calculateNumAdd(1, 2));
console.log(calculateNumSubtract(5, 3));

let doCalculation = (operation: 'add' | 'subtract'): calculator => {
  if (operation ==='add') {
    return calculateNumAdd;
  } else {
    return calculateNumSubtract;
  }
}

console.log(doCalculation('add')(5, 5));
