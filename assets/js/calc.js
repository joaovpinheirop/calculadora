
const display = document.getElementById('display') // display da calculadora
const displayResult = document.getElementById('result') // display result da calculadora

let value = ''; //valor que esta sendo digitado
let currentvalue = ''; // valor armazeda para executar a operação

// operador que ira definir o calculo
let operator = {
  operator: null,
  simble: ''
};


// operation and sum
const sum = (x, y) => {
  return x + y;
}
// operation and subtraction
const subtract = (x, y) => {
  return x - y;
}
// operation and multiply
const multiply = (x, y) => {
  return x * y;
}
// operation and divide
const divide = (x, y) => {
  return x / y;
}
// operation and divide
const percentage = (x, y) => {
  return (y * x) / 100;
}

/* -----------
perform calculation according to the predefined operation and show the result on the display
 ----------*/
const calc = (x, operations, y) => {
  return operations(x, y);
}

/* -----------
show what is being typed on the display
 ----------*/
function showValuesScreen(valueId) {
  if (!isNaN(valueId)) {
    value += valueId;
    display.value = `${currentvalue} ${operator.simble} ${value}`

  }
  showResult();
}
/* -----------
pre define operation for calculation
 ----------*/
function performOperation(valueId) {
  switch (valueId) {
    case 'sum':
      operator.operator = sum;
      operator.simble = '+';
      currentvalue = Number(currentvalue) + Number(value);
      value = ''
      display.value = `${currentvalue} ${operator.simble} ${value}`


      break;

    case 'subtract':
      operator.operator = subtract;
      operator.simble = '-';
      currentvalue = Number(currentvalue) + Number(value);
      value = ''
      display.value = `${currentvalue} ${operator.simble} ${value}`
      break;

    case 'multiply':
      operator.operator = multiply;
      operator.simble = 'x';
      currentvalue = Number(currentvalue) + Number(value);
      value = ''
      display.value = `${currentvalue} ${operator.simble} ${value}`
      break;

    case 'divide':
      operator.operator = divide;
      operator.simble = '/';
      currentvalue = Number(currentvalue) + Number(value);
      value = ''
      display.value = `${currentvalue} ${operator.simble} ${value}`
      break;

    case 'percentage':
      operator.operator = percentage;
      operator.simble = '%';
      currentvalue = Number(currentvalue) + Number(value);
      value = ''
      display.value = `${currentvalue}${operator.simble}${value}`
      break;
    case 'delete':

      if (value.length >= 0) {
        value = value.slice(0, -1);
        display.value = `${currentvalue} ${operator.simble} ${value}`;
        displayResult.value = result
      }
      showResult();

      break;

    case 'equal':
      result = calc(Number(currentvalue), operator.operator, Number(value))
      display.value = result
      value = result
      currentvalue = ''
      operator.simble = ''
      displayResult.value = ''
      break;

  }
}


function performModifiers(modifier) {

  switch (modifier) {
    case '.':
      value = value + '.'
      display.value = `${currentvalue} ${operator.simble} ${value}`
      console.log(display.value = `${currentvalue} ${operator.simble} ${value}`)
      break;
    case 'clear':
      value = ''
      currentvalue = ''
      result = ''
      operator.operator = ''
      operator.simble = ''
      display.value = ''
      break;
  }
}

const showResult = () => {
  if (currentvalue) {
    result = calc(Number(currentvalue), operator.operator, Number(value))
    displayResult.value = result
  }
}
/* -----------
 button calculator
 ----------*/
function btn(id) {
  showValuesScreen(id);
  performModifiers(id)
  performOperation(id);
}
