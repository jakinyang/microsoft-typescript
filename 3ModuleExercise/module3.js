"use strict";
let employee1 = {
    firstName: "John",
    lastName: "Cena",
    fullName() {
        return this.firstName + this.lastName + "!";
    },
};
let icecreamOrderOne = {
    flavor: "Vanilla",
    scoops: 3,
};
console.log(icecreamOrderOne.flavor);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return `${dessert.scoops} is too many scoops!`;
    }
    else {
        return `Your order will be ready soon!`;
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }));
