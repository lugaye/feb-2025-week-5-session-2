// Variables -  named containers for data
// Declare variables using let, const, or var
//1. var - function scoped, can be redeclared and updated
// keyword var variableName = value;    
var courseName = "JavaScript"; // string

//2. let - block scoped, can be updated but not redeclared
//keyword let variableName = value;
let courseDuration = 8; // number

//3. const - block scoped, cannot be updated or redeclared
//keyword const variableName = value;
const PI = 3.14; // number

//Data Types 
//Primitive Data Types
//1. String - represents text, enclosed in single or double quotes
//2. Numbers - represents numeric values, can be integers or floats
//3. Boolean - represents true or false values
//4. Undefined - represents a variable that has been declared but not assigned a value
let instructorName; // undefined
//5. Null - represents an intentional absence of any object value
var studentName = null; // null
var studentName = '';
var studentName = 0;

//Non-Primitive Data Types
//1. Object - represents a collection of key-value pairs
let person = {
    name: "John",
    age: 30,
    isStudent: false
}

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

//console.log(person); 

//console.log(car.brand); // Accessing object properties using dot notation
//console.log(car["model"]); // Accessing object properties using bracket notation


//2. Array - represents a list of values, can be of any data type
let fruits = ["apple", "banana", "cherry"];
let countries = ["Kenya", "Nigeria", "Uganda", "Tanzania", "South Africa"];

//console.log(fruits[0]); // Accessing array elements using index

//console.log(fruits);

//3. Function - represents a block of code that can be called and executed

//Operators
//1. Arithmetic Operators - used to perform mathematical operations
let a = 10;
let b = 5;
let sum = a + b; // Addition
let difference = a - b; // Subtraction  
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus
let exponent = a ** b; // Exponentiation
let increment = a++; // Increment
let decrement = b--; // Decrement

//2. Assignment Operators - used to assign values to variables
// = - assignment operator
// += - addition assignment operator
// -= - subtraction assignment operator
// *= - multiplication assignment operator
// /= - division assignment operator
// %= - modulus assignment operator
// **= - exponentiation assignment operator

let x = 10; 
let y = 5;
let addition = x += y; // x = x + y 
let subtraction = x -= y; // x = x - y
let multiplication = x *= y; // x = x * y
let division = x /= y; // x = x / y
let modulus = x %= y; // x = x % y
let exponentiation = x **= y; // x = x ** y

//3. Comparison Operators - used to compare values and return a boolean result
// == - equal to
// === - strictly equal to (checks both value and type)
// != - not equal to
// !== - strictly not equal to (checks both value and type)
// > - greater than
// < - less than
// >= - greater than or equal to
// <= - less than or equal to

let d = 100; let e = "100";

let isEqual = d == e; // false
let isStrictEqual = d === e; // false
let isNotEqual = d != e; // true
let isStrictNotEqual = d !== e; // true
let isGreaterThan = d > e; // true
let isLessThan = d < e; // false
let isGreaterThanOrEqualTo = d >= e; // true
let isLessThanOrEqualTo = d <= e; // false

//console.log(isEqual); // true
//console.log(isStrictEqual); // false
//console.log(isNotEqual); // false
//console.log(isStrictNotEqual); // true
///console.log(isGreaterThan); // false
//console.log(isLessThan); // false
///console.log(isGreaterThanOrEqualTo); // true
//console.log(isLessThanOrEqualTo); // true

//4. Logical Operators - used to combine multiple boolean expressions
// && - logical AND (true if both operands are true)
// || - logical OR (true if at least one operand is true)
// ! - logical NOT (inverts the boolean value)

let w = 10; y = 5; z = 20;
let isTrue = (w > y) && (z > w); // true    
let isFalse = (w < y) || (z < w); // false
let isNotTrue = !(w > y); // false

// Functions - block of code that performs a specific task
// Function Declaration
/*

function functionName(parameter1, parameter2,.......) 
    // code to be executed
    //return statement (optional)
}

*/

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Calling the function with an argument

function modulo(a, b) {
    return a % b;
}

console.log(modulo(10, 3)); // Calling the function with arguments
  

function hello(name, country) {
    console.log("My name is "+name+". I'm from "+country)
}
  
hello("John", "Kenya");

//function expression - a function that is assigned to a variable
let greeting = function(name) { 
    console.log("Hello, " + name + "!");
}

greeting("Bob"); // Calling the function with an argument

//Arrow Function -  a shorter syntax for writing functions
//Syntax:
//const functionName = (parameter1, parameter2, .......) => {

const summation = (a, b) => a + b;

console.log(summation(5, 10)); // Calling the arrow function with arguments

// LOOPS - used to execute a block of code repeatedly
//1. For Loop - used when the number of iterations is known (cycle)
//syntax - for (initialization; condition; increment/decrement) { //code to be executed }

for (let i = 0; i <= 20; i++) {
    console.log("Cycle " + i);
}