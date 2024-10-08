// 8-clean_set.js

export default function cleanSet(set, startString) {
  // Handle edge case for an empty startString
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Filter values that start with startString and remove that part from the string
  const result = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  // Join the resulting array with hyphens
  return result.join('-');
}
