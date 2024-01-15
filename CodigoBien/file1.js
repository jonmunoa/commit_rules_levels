// Original code for file1.js

function greet(name) {
    return `Hello, ${name}!`;
}

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
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function square(a) {
    return a * a;
}

function cube(a) {
    return a * a * a;
}

function power(a, b) {
    return Math.pow(a, b);
}

function sqrt(a) {
    return Math.sqrt(a);
}

function cbrt(a) {
    return Math.cbrt(a);
}

function max(a, b) {
    return Math.max(a, b);
}

function min(a, b) {
    return Math.min(a, b);
}

function abs(a) {
    return Math.abs(a);
}

function round(a) {
    return Math.round(a);
}

function ceil(a) {
    return Math.ceil(a);
}

function floor(a) {
    return Math.floor(a);
}

function random() {
    return Math.random();
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial of negative number is not defined.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

module.exports = {
    greet,
    add,
    subtract,
    multiply,
    divide,
    square,
    cube,
    power,
    sqrt,
    cbrt,
    max,
    min,
    abs,
    round,
    ceil,
    floor,
    random,
    randomInt,
    factorial
};
