export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Return the size when cast to a Number
  valueOf() {
    return this._size;
  }

  // Return the location when cast to a String
  toString() {
    return this._location;
  }
}
