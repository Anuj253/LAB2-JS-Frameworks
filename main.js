// Importing all functions from functions.js using import statement
import * as myModule from "./functions.js";

// Calling welcomeMessage function with a string (firstname)
myModule.welcomeMessage("ANUJ");

// Calling distanceConverter function with a double value and printing the result
const distance = myModule.distanceConverter;
console.log(distance(10));

// Calling square function with 3 parameters and printing the result
const square = myModule.square;
console.log(square(4, 16, 10));

// Printing the result of advancedFunction with cube function as parameter and 10 as number
console.log(myModule.advancedFunction(myModule.cube, 10));
