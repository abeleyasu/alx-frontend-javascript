// 100-weak.js

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    // Initialize the count to 0 if it's a new endpoint
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Throw an error if the count reaches 5 or more
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
