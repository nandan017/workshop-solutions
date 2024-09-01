window.onload = function() {
    const display = document.getElementById('display');
    function appendNumber(number) {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        }
    }
    function appendOperator(operator) {
        if (display.value !== '') {
            display.value += operator;
        }
    }
    function clearDisplay() {
        display.value = '';
    }
    function deleteLast() {
        display.value = display.value.slice(0, -1);
    }
    function calculateResult() {
        try {
            display.value = new Function('return ' + display.value)();
        } catch (e) {
            display.value = 'Error';
        }
    }
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;

            if (buttonText === 'C') {
                clearDisplay();
            } else if (buttonText === 'DEL') {
                deleteLast();
            } else if (buttonText === '=') {
                calculateResult();
            } else if (['+', '-', '*', '/'].includes(buttonText)) {
                appendOperator(buttonText);
            } else {
                appendNumber(buttonText);
            }
        });
    });
};
