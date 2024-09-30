export default function createIteratorObject(report) {
  const employees = report.allEmployees;

  // Create a generator function to yield each employee
  function* employeeGenerator() {
    for (const department in employees) {
      for (const employee of employees[department]) {
        yield employee;
      }
    }
  }

  return employeeGenerator(); // Return the generator
}
