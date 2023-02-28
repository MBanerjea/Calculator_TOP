// Basic functions

// Add
function add(numbers) {
  let result = numbers.reduce((sum, current) => sum + current, 0);
  return result;
}

// Subtract
function subtract(numbers) {
  let result = numbers.reduce((remainder, current) => remainder - current);
  return result;
}

// Multiply
function multiply(numbers) {
  let result = numbers.reduce((product, current) => product * current);
  return result;
}

// Divide
function divide(a, b) {
  let result = a / b;
  return result;
}