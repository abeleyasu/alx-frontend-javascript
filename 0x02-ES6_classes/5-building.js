export default class Building {
  constructor(sqft) {
    // Validate the sqft type
    this._validateNumber(sqft, 'Square feet');
    this._sqft = sqft;

    // Ensure the class is abstract
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Helper method for number validation
  _validateNumber(value, fieldName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${fieldName} must be a number`);
    }
  }

  // Abstract method that needs to be implemented in derived classes
  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage method must be implemented');
  }
}
