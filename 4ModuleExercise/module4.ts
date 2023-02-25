function addNumbers(x: number, y: number): number {
  return x + y;
}

console.log(addNumbers(1, 2));

let sum = function (input: number[]): number {
  let total: number =  0;
  for(let i = 0; i < input.length; i++) {
      if(isNaN(input[i])) {
          continue;
      }
      total += Number(input[i]);
  }
  return total;
}

console.log(sum([1, 2, 3]));

function displayAlert(message: string) {
  alert(`The message is ${message}`);
}

