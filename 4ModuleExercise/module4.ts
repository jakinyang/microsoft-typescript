// function addNumbers(x: number, y: number): number {
//   return x + y;
// }

console.log(addNumbers(1, 2));

console.log(sum([1, 2, 3]));

function displayAlert(message: string) {
  alert(`The message is ${message}`);
}

function sum(input: number[]): number {        
  let total: number =  0;
  for(let count = 0; count < input.length; count++) {
      if(isNaN(input[count])){
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

console.log(addOptionalNumbers(1 ,2))
console.log(addOptionalNumbers(2))

function addDefaultNumbers(x: number, y: number = 25): number {
  return x + y;
}
console.log(addDefaultNumbers(1, 2));
console.log(addDefaultNumbers(1));