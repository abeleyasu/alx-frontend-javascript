export default class Currency {
  constructor(code, name) {
    // Validate types in the constructor
    this._validateString(code, 'Code');
    this._validateString(name, 'Name');

    // Assign to private attributes
    this._code = code;
    this._name = name;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters with type validation
  set code(value) {
    this._validateString(value, 'Code');
    this._code = value;
  }

  set name(value) {
    this._validateString(value, 'Name');
    this._name = value;
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Helper method for type validation
  _validateString(value, fieldName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${fieldName} must be a string`);
    }
  }
}
