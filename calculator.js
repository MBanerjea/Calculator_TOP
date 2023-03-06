// Basic functions

// Operate
function operate(operator, a, b) {

  switch (operator) {
    case '+':
      return add(a, b);

    case '-':
      return subtract(a, b);

    case 'x':
      return multiply(a, b);

    case '/':
      return divide(a, b);

    default:
      break;
  }
}

// Add
function add(a, b) {
  return a + b;
}

// Subtract
function subtract(a, b) {
  return a - b;
}

// Multiply
function multiply(a, b) {
  return a * b;
}

// Divide
function divide(a, b) {
  return a / b;
}


// Display population
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const operators = document.querySelectorAll('.operators');
const numbers = document.querySelectorAll(".numbers")
const displayScreen = document.querySelector(".display");

let displayValue = "";
let currentValue = "";
let previousValue = "";
let operator = "";


// numbers
numbers.forEach(number => {
  number.addEventListener('click', (e) => {
    handleNumbers(e.target.textContent);
    displayScreen.textContent = currentValue;
  })
})

function handleNumbers(num) {
  if (currentValue.toString().length <= 5) {
    currentValue += num;
  }
}

// operators
operators.forEach(operatorBtn => {
  operatorBtn.addEventListener('click', (e) => {
    if (operator != "") {
      currentValue = operate(operator, Number(previousValue), Number(currentValue));
    }
    handleOperators(e.target.textContent);
    displayScreen.textContent = currentValue;
  })
})

function handleOperators(op) {
  if (currentValue != "") {
    previousValue = currentValue;
  }
  currentValue = "";
  operator = op;
}

// calculate

equals.addEventListener('click', () => {
  if (currentValue != "" && previousValue != "") {
    currentValue = operate(operator, Number(previousValue), Number(currentValue))
    displayScreen.textContent = currentValue;
    operator = "";
    previousValue = currentValue;
    currentValue = "";
  }

});


// clearance

clear.addEventListener('click', () => {
  displayScreen.textContent = "0";
  currentValue = "";
  previousValue = "";
  operator = "";
})


