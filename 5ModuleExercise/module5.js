"use strict";
/**
 * Classes
 */
class Car {
    // Constructor
    constructor(make, color, doors = 4) {
        this._make = make;
        this._color = color;
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
            throw new Error("Doors must be an even number!");
        }
        Car._carCount++;
    }
    // Accessors
    get make() {
        return this._make;
    }
    get color() {
        return this._color;
    }
    get doors() {
        return this._doors;
    }
    set make(make) {
        this._make = make;
    }
    set color(color) {
        this._color = color;
    }
    set doors(doors) {
        if (doors % 2 === 0) {
            this._doors = doors;
        }
        else {
            throw new Error("Doors must be an even number!");
        }
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} KPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is is turning ${direction}.`;
    }
    worker() {
        return this._make;
    }
    static getCarCount() {
        return ` The current total number of cars is ${Car._carCount}.`;
    }
}
// Static Properties
Car._carCount = 0;
/**
 * Instantiate a Class
 */
let car1 = new Car('Citroen', 'blue', 2);
console.log(car1.color);
console.log(car1.make);
// console.log(car1._color);
console.log(Car.getCarCount());
// let car2 = new Car('Hyundai', 'yellow', 3);
// console.log(car2.color);
// console.log(car2.doors);
let car3 = new Car('Ford', 'black');
console.log(car3.doors);
console.log(car3.make);
console.log(Car.getCarCount());
console.log(car3.accelerate(105));
console.log(car3.brake());
console.log(car3.turn('right'));
/**
 * Class Extension
 */
class ElectricCar extends Car {
    // Constructor
    constructor(make, color, range, doors = 4) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(`${this.worker()} is charging.`);
    }
    // Method Override
    brake() {
        return `${this.worker()} is braking with the regeneratvie braking system.`;
    }
}
let spark = new ElectricCar('Chevrolet', 'green', 124, 2);
let tesla = new ElectricCar('Tesla', 'red', 300, 2);
console.log(tesla.brake());
tesla.charge();
