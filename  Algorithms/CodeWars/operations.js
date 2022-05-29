/* Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */


function basicOp(operation, value1, value2) {
  // Code

  switch (operation) {
    case "+":
      return value1 + value2
      break;
    case "-":
      return value1 - value2
      break;
    case "*":
      return value1 * value2
      break;
    case "/":
      return value1 / value2
      break;
    default: null
      break;
  }

}


console.log((basicOp('+', 4, 7), 11));


//Another solution
//The eval() function evaluates JavaScript code represented as a string.
function basicOperation(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log((basicOperation('*', 4, 7), 28));


