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
        alert("You can't do that!");
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

        document.documentElement.style.setProperty('--color0', 'rgb(220, 185, 248)');
        document.documentElement.style.setProperty('--color1', 'white');
        document.documentElement.style.setProperty('--color2', 'white');
        document.documentElement.style.setProperty('--color3', 'white');
        document.documentElement.style.setProperty('--color4', 'white');
        document.documentElement.style.setProperty('--color5', 'rgb(49, 49, 49)');
        document.documentElement.style.setProperty('--color6', 'rgb(194, 177, 255');
        document.documentElement.style.setProperty('--color7', 'rgb(230, 246, 255)');
        document.documentElement.style.setProperty('--color8', 'rgb(255, 231, 231)');
        document.documentElement.style.setProperty('--color9', 'white');
        document.documentElement.style.setProperty('--color10', 'black');
        document.documentElement.style.setProperty('--color11', 'white');
        document.documentElement.style.setProperty('--color12', 'rgb(87, 87, 87)');

        toggle = true;
    }
    else {
        circle.style.transform = 'translateX(0px)';

        document.documentElement.style.setProperty('--color0', '');
        document.documentElement.style.setProperty('--color1', '');
        document.documentElement.style.setProperty('--color2', '');
        document.documentElement.style.setProperty('--color3', '');
        document.documentElement.style.setProperty('--color4', '');
        document.documentElement.style.setProperty('--color5', '');
        document.documentElement.style.setProperty('--color6', '');
        document.documentElement.style.setProperty('--color7', '');
        document.documentElement.style.setProperty('--color8', '');
        document.documentElement.style.setProperty('--color9', '');
        document.documentElement.style.setProperty('--color10', '');
        document.documentElement.style.setProperty('--color11', '');
        document.documentElement.style.setProperty('--color12', '');

        toggle = false;
    }
})


// Debugging help
// console.log('works');