// Initialize variables //
let result, display = document.querySelector('.display'), a = '', b = '', sign ='', counter = 0;

// Calculator functions //
function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

function operate (a, sign, b) {
    switch (sign) {
        case '+' :  return result = add(+a,+b);
        case '-' :  return result = subtract(+a,+b);
        case '*' :  return result = multiply(+a,+b);      
        case '/' :  return result = divide(+a,+b);
    }
} 

// Operation Buttons function and events //
const operationButtons = document.querySelectorAll('.operation');

for (key of operationButtons) {
    key.addEventListener("click", (e) => {
        a = display.innerText
        sign = e.target.innerText;
    })
}

// Normal Buttons function and events //
const normalButtons = document.querySelectorAll('.normal');

for (key of normalButtons) {
    key.addEventListener("click", (e) => {
        if (display.innerText.length >= 20) {
            alert("Max numbers reached");
            return;
        }
        display.innerText += e.target.innerText;
    })
}

// Special Buttons function and events //
const specialButtons = document.querySelectorAll('.special');

function reset () {
    a = '';
    b = '';
    sign = '';
    display.innerText = '';
}

function resetOne () {
    let temp = display.innerText;
    display.innerText = temp.substring(0, temp.length - 1); 
}

function equate () {
    let length;
    b = display.innerText;
    length = b.length;
    b = b.substring(a.length+1, length);

    // Not fully initializing all input condition //
    if ( a === ''|| sign === '' || b === '') {
        return;
    }

    display.innerText = operate(a, sign, b);

    // Explicit conditions //
    if ( sign == '/' && b == 0) {
        display.innerText = '';
        alert("You can't do that");
    }
    else if (display.innerText == 'NaN') {
        display.innerText = '';
        alert("Multiple or Complex operations are not supported at the moment. Sorry!");
    }
}

for (key of specialButtons) {
    key.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case 'Esc' :    reset();
                            break;
            case 'Back' :   resetOne();
                            break;
            case '=' :      equate();   
                            break;
        }
    })
}

// Theme event 
let theme = document.querySelector('.input-theme'),
    circle = document.querySelector('.circle'),
    toggle = false;
theme.addEventListener("change", (e) => {
    if (!toggle) {
        circle.style.transform = 'translateX(30px)';
        toggle = true;
    }
    else {
        circle.style.transform = 'translateX(0px)';
        toggle = false;
    }
})


// Debugging help
// console.log('works');