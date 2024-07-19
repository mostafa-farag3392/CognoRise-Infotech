let displayValue = '0';
let newCalculation = false;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') displayValue = '0';
    updateDisplay();
}

function appendNumber(number) {
    if (newCalculation) {
        displayValue = number;
        newCalculation = false;
    } else {
        if (displayValue === '0') {
            displayValue = number;
        } else {
            displayValue += number;
        }
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (['+', '-', '*', '/', '%', '**'].includes(displayValue.slice(-1))) {
        displayValue = displayValue.slice(0, -1) + operator;
    } else {
        displayValue += operator;
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        newCalculation = true;
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}


