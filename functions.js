// Utility file containing functions as required

// Function to show a welcome message taking first name as input
export function welcomeMessage(firstname) {
    console.log(`Hello ${firstname}, THIS IS YOUR LAB2.`);
}

// Function to convert kilometers to meters taking a double as input
export function distanceConverter(kilometers) {
    let result = kilometers * 1000;
    return result;
}

// Function to take any number of parameters and return the square of all the parameters
export function square(...num) {
    let squareArray = [];
    for (let n of num) {
        squareArray.push(n * n);
    }
    return squareArray;
}

// Function to return the cube of a number
export function cube(num) {
    return Math.pow(num, 3);
}

// Advanced function that takes a function and a number as parameters
export function advancedFunction(mathOperation, value) {
    return mathOperation(value);
}
