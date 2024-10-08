import Car from './10-car.js';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor
    this[_range] = range; // Store range using a Symbol
  }

  cloneCar() {
    // Return an instance of Car instead of EVCar
    return new Car(this.brand, this.motor, this.color);
  }

  get range() {
    return this[_range];
  }
}
