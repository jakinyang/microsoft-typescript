interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

let employee1: Employee = {
  firstName: "John",
  lastName: "Cena",
  fullName(): string {
    return this.firstName + this.lastName + "!"
  },
}

interface IceCream {
  flavor: string;
  scoops: number;
}

let icecreamOrderOne: IceCream = {
  flavor: "Vanilla",
  scoops: 3,
} 

console.log(icecreamOrderOne.flavor);

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
    return `${dessert.scoops} is too many scoops!`;
  } else {
    return `Your order will be ready soon!`;
  }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));
