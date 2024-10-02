export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0'); // Throw an error if denominator is 0
  }
  return numerator / denominator; // Return the division result otherwise
}
