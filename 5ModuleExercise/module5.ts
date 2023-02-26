/**
 * Classes
 */
class Car {
  // Properties
  private _make: string;
  private _color: string;
  private _doors: number;

  // Static Properties
  private static _carCount: number = 0;

  
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number!");
    }
    Car._carCount++;
  }

  // Accessors
  get make() {
    return this._make
  }
  get color() {
    return this._color
  }
  get doors() {
    return this._doors
  }

  set make(make) {
    this._make = make;
  }
  set color(color) {
    this._color = color;
  }
  set doors(doors) {
    if(doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number!");
    }
  }

  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} KPH.`
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`
  }
  turn (direction: 'left' | 'right'): string {
    return `${this.worker()} is is turning ${direction}.`
  }
  private worker(): string {
    return this._make;
  }

  public static getCarCount(): string {
    return ` The current total number of cars is ${Car._carCount}.`;
  }
}

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
