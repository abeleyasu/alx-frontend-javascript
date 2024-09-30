export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  // Iterate through the iterator and collect names
  for (const employee of reportWithIterator) {
    employeeNames.push(employee);
  }

  // Join the names with a separator and return
  return employeeNames.join(' | ');
}
