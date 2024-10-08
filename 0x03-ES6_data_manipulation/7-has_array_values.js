// 7-has_array_values.js

export default function hasValuesFromArray(set, arr) {
  // Check if every element in the array exists in the set
  return arr.every((value) => set.has(value));
}
