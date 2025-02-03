
let firstNum;
let secondNum;
let operator;

const mainDisplay = document.querySelector('.calculator-display-top');
const mainDisplayNum = document.querySelector('.calculator-display-top-num');
const secondaryDisplay = document.querySelector('.calculator-display-bottom');
const numberButtons = document.querySelectorAll('.number-button');
const clearButton = document.querySelector('.clear-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const operatorBox = document.querySelector('.operator-box');
const equalButton = document.querySelector('.equal-button');
const backspaceButton = document.querySelector('.backspace-button');
const pointButton = document.querySelector('.point-button');

function add(x, y) {
    return Number(x) + Number(y);
};

function subtract(x ,y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

function calculate(x, operator, y) {
    x = mainDisplayNum.textContent;
    operator = operatorBox.textContent;
    y = secondaryDisplay.textContent;
    if (operator === '+') {
        console.log(add(x,y));
        mainDisplayNum.textContent = Math.round(add(x, y) * 100) / 100;
        secondaryDisplay.textContent = '';
        operatorBox.textContent = '';
        return add(x, y);
    } else if (operator === '-') {
        console.log(subtract(x ,y));
        mainDisplayNum.textContent = Math.round(subtract(x ,y) * 100) / 100;
        secondaryDisplay.textContent = '';
        operatorBox.textContent = '';
        return subtract(x ,y);
    } else if (operator === 'x') {
        console.log(multiply(x, y));
        mainDisplayNum.textContent = Math.round(multiply(x, y) * 100) / 100;
        secondaryDisplay.textContent = '';
        operatorBox.textContent = '';
        return multiply(x, y);
    } else if (operator === '%') {
        console.log(divide(x, y));
        mainDisplayNum.textContent = Math.round(divide(x, y) * 100) / 100;
        secondaryDisplay.textContent = '';
        operatorBox.textContent = '';
        return divide(x, y);
    } 
};

function updateDisplay(e) {
    if (operatorBox.textContent == '') {
        if (mainDisplayNum.textContent.trim() === 'Infinity') {
            mainDisplayNum.textContent = ''; // Clear the display properly
        }
        if (e.target.textContent == '.' && mainDisplayNum.textContent.includes('.')) {
            return;
        } 
        mainDisplayNum.textContent += e.target.textContent;
    } else {
        if (e.target.textContent == '.' && secondaryDisplay.textContent.includes('.')) {
            return;
        } 
        secondaryDisplay.textContent += e.target.textContent;
    }
    return;
}

numberButtons.forEach((button) => {
    button.addEventListener('click', updateDisplay);
});

function clearAll() {
    mainDisplayNum.textContent = '';
    secondaryDisplay.textContent = '';
    operatorBox.textContent = '';
}

clearButton.addEventListener('click', clearAll);

function addOperator(e) {
    if (operatorBox.textContent !== '' && secondaryDisplay.textContent !== '') {
        calculate();
        operatorBox.textContent = e.target.textContent;
    } else if (operatorBox.textContent === '') {
        operatorBox.textContent = e.target.textContent;
        return;
    }
}

operatorButtons.forEach((button) => {
    button.addEventListener('click', addOperator);
});

equalButton.addEventListener('click', calculate);

function backspace() {
    if (secondaryDisplay.textContent.length > 0) {
        secondaryDisplay.textContent = secondaryDisplay.textContent.slice(0, -1);
    } else if (operatorBox.textContent.length > 0) {
        operatorBox.textContent = operatorBox.textContent.slice(0, -1);
    } else if (mainDisplayNum.textContent.length > 0) {
        mainDisplayNum.textContent = mainDisplayNum.textContent.slice(0, -1);
    }
}

backspaceButton.addEventListener('click', backspace);

