// Modify function taskFirst to use const
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Modify function taskNext to use let
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

// Keep the getLast function as is
export function getLast() {
  return ' is okay';
}

