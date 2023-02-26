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
  instructions?: string;
}

let icecreamOrderOne: IceCream = {
  flavor: "Vanilla",
  scoops: 3,
  instructions: "Make it big and generous",
} 

console.log(icecreamOrderOne.flavor);

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
    return `${dessert.scoops} is too many scoops!`;
  } else {
    return `Your order will be ready soon!`;
  }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, instructions: "Make it big!"}));

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let sundaeOrder1: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: 'caramel',
  nuts: true,
  whippedCream: true,
  instructions: "Make it big!"
}