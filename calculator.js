// Import readline-sync for user input
const readlineSync = require('readline-sync');

// Function to perform the calculation
function performCalculation(operation, num1, num2) {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        console.log("Cannot divide by zero.");
        return;
      }
      result = num1 / num2;
      break;
    default:
      console.log("That is not a valid operation");
      return;
  }
  console.log(`The result is: ${result}`);
}

function runCalculator() {
  // Get the operation
  const operation = readlineSync.question("What operation would you like to perform? ( / * - + ): ");
  if (!['/', '*', '-', '+'].includes(operation)) {
    console.log("That is not a valid operation");
    return runCalculator();
  }

  // Get the first number
  let num1 = readlineSync.question("Please enter the first number: ");
  num1 = parseFloat(num1);
  if (isNaN(num1)) {
    console.log("This is not a number");
    return runCalculator();
  }

  // Get the second number
  let num2 = readlineSync.question("Please enter the second number: ");
  num2 = parseFloat(num2);
  if (isNaN(num2)) {
    console.log("This is not a number");
    return runCalculator();
  }

  // Perform the calculation
  performCalculation(operation, num1, num2);
}

// Start the calculator
runCalculator();
