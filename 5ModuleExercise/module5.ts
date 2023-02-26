/**
 * Classes
 */
class Car {
  // Properties
  _make: string;
  _color: string;
  _doors: number;
  
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
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
  worker(): string {
    return this._make;
  }
}

/**
 * Instantiate a Class
 */

let car1 = new Car('Citroen', 'blue', 2);

console.log(car1.color);
console.log(car1.make);