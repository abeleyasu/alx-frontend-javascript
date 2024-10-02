export default function guardrail(mathFunction) {
  const queue = []; // Initialize the queue array

  try {
    const result = mathFunction(); // Execute the provided math function
    queue.push(result); // Append the result to the queue
  } catch (error) {
    queue.push(error.message); // Append the error message to the queue if an error occurs
  } finally {
    queue.push('Guardrail was processed'); // Always append this message to the queue
  }

  return queue; // Return the queue array
}
