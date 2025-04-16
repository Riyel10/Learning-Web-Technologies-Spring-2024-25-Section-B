let currentInput = '';

function appendToDisplay(value) {
    const lastChar = currentInput.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];
    
    if (value === '.' && currentInput.split(/[\+\-\*\/\%]/).pop().includes('.')) {
        return;
    }
    
    if (operators.includes(value) && currentInput === '' && value !== '-') {
        return;
    }
    
    if (operators.includes(value) && operators.includes(lastChar)) {
        if (!(value === '-' && lastChar === '-')) {
            currentInput = currentInput.slice(0, -1);
        }
    }
    
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput;
}

function calculate() {
    try {
        if (!currentInput || /[^0-9\+\-\*\/\%\.]/.test(currentInput)) {
            throw new Error('Invalid input');
        }
        
        let expression = currentInput.replace(/×/g, '*');
        
        expression = expression.replace(/([0-9]+)%/g, '($1/100)');
        
        const result = new Function('return ' + expression)();
        
        const roundedResult = Math.round(result * 10000000000) / 10000000000;
        
        currentInput = roundedResult.toString();
        document.getElementById('result').value = currentInput;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (/[0-9\.\+\-\*\/\%]/.test(key)) {
        event.preventDefault();
        appendToDisplay(key);
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        event.preventDefault();
        deleteLastChar();
    } else if (key === 'Escape') {
        event.preventDefault();
        clearDisplay();
    }
});