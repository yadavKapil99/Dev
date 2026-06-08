function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}


// Higher order function is a function that takes another function as an argument or returns a function as a result. It is a powerful concept in functional programming that allows us to create more flexible and reusable code. In the above example, doOperation is a higher order function that takes a function op as an argument and returns the result of calling op with the arguments a and b. We can pass any of the functions sum, multiply, subtract, or divide as the op argument to doOperation to perform the desired operation on the numbers a and b.

function doOperation(a, b, op) {
  return op(a, b);
}

console.log(sum(1, 2));
console.log(doOperation(1, 2, sum));
