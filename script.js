const firstNum = parseFloat(prompt("Hello, Enter a Number"));
const operator = prompt("Can you please enter an operator ( +, -, * or /):");
const lastNum = parseFloat(prompt("Enter another number please"));
if (operator == "+") {
  result = firstNum + lastNum;
} else if (operator == "-") {
  result = firstNum - lastNum;
} else if (operator == "*") {
  result = firstNum * lastNum;
} else {
  result = firstNum / lastNum;
}

window.alert(`Your answer is: ${result}`);
