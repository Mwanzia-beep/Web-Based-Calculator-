/*JS FILE for the Web Calc App by Nzavi*/
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function calculate(operation, a, b) {
    if (operation === '+') {
      return add(a, b);
    } else if (operation === '-') {
      return subtract(a, b);
    } else if (operation === '*') {
      return multiply(a, b);
    } else if (operation === '/') {
      return divide(a, b);
    } else {
      return 'Invalid operation';
    }
  }
  
  const result = calculate('+', 4, 5);
  console.log(result); // 9
  