let num1= window.prompt('Enter a number');
let operator=window.prompt('Enter an operator(+,-,/,*)');
let num2 = window.prompt("Enter a number");
const result= `${num1} ${operator} ${num2}`

alert(`${num1} ${operator} ${num2} = ${eval(result)}`);