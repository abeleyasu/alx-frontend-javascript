export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validate types in the constructor
    this._validateString(name, 'Name');
    this._validateNumber(length, 'Length');
    this._validateStudentsArray(students, 'Students');
    
    // Assign to private attributes
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters with type validation
  set name(value) {
    this._validateString(value, 'Name');
    this._name = value;
  }

  set length(value) {
    this._validateNumber(value, 'Length');
    this._length = value;
  }

  set students(value) {
    this._validateStudentsArray(value, 'Students');
    this._students = value;
  }

  // Helper methods for type validation
  _validateString(value, fieldName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${fieldName} must be a string`);
    }
  }

  _validateNumber(value, fieldName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${fieldName} must be a number`);
    }
  }

  _validateStudentsArray(value, fieldName) {
    if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
      throw new TypeError(`${fieldName} must be an array of strings`);
    }
  }
}
