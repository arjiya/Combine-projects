// JavaScript Data Types Examples

// Primitive Data Types

// 1. String - Represents textual data
const name = "John Doe";
console.log(name);

// 2. Number - Represents numeric data, including integers and floating-point numbers
const age = 25;
const pi = 3.14159;
console.log(age, pi);

// 3. BigInt - Represents integers of arbitrary precision
const bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

// 4. Boolean - Represents a logical value: true or false
const isAvailable = true;
const isOpen = false;
console.log(isAvailable, isOpen);

// 5. Undefined - Indicates a variable has been declared but not assigned a value
let notAssigned;
console.log(notAssigned);

// 6. Null - Represents the intentional absence of any value
const emptyValue = null;
console.log(emptyValue);

// 7. Symbol - Represents a unique and immutable value
const uniqueId = Symbol("id");
console.log(uniqueId);

// Non-Primitive Data Types

// 1. Object - A collection of key-value pairs
const person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
console.log(person);

// 2. Array - A special type of object used to store an ordered collection of items
const fruits = ["apple", "banana", "cherry"];
console.log(fruits);

// 3. Function - A callable object that executes a block of code
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Sam"));

// 4. Date - Represents dates and times
const today = new Date();
console.log(today);

// Template Literals

// Template literals allow for string interpolation and multi-line strings.
// They are enclosed by backticks (`) instead of quotes.

// Example of string interpolation
const firstName = "Jane";
const lastName = "Doe";
const greeting = `Hello, ${firstName} ${lastName}!`;
console.log(greeting);

// Example of multi-line string
const multiLineString = `This is line one.
This is line two.`;
console.log(multiLineString);

// Traditional string concatenation for comparison
const concatenatedString = "Hello, " + firstName + " " + lastName + "!";
console.log(concatenatedString);

// Variable Declarations

// Differences between var, let, and const

// 1. `var`: Function-scoped and allows redeclaration. Suitable for legacy code.
function exampleVar() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable, due to function scope
        console.log(x);
    }
    console.log(x);
}
exampleVar();

// 2. `let`: Block-scoped and cannot be redeclared in the same scope. Use for variables that may change value.
function exampleLet() {
    let y = 10;
    if (true) {
        let y = 20; // Different variable, due to block scope
        console.log(y);
    }
    console.log(y);
}
exampleLet();

// 3. `const`: Block-scoped and must be initialized. Use for variables that should not change value.
function exampleConst() {
    const z = 10;
    console.log(z);
    // z = 20; // Error: Assignment to constant variable
}
exampleConst();

// Example Scenarios

// Use `var` when compatibility with older codebases is needed.
var legacyVariable = "I am var";
console.log(legacyVariable);

// Use `let` for variables that may need to change value.
let counter = 0;
counter++;
console.log(counter);

// Use `const` for constants or variables that should remain unchanged.
const API_URL = "https://api.example.com";
console.log(API_URL);

// Special Cases

// Type `typeof` Operator - Used to determine the type of a variable
console.log(typeof "Hello");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol("id"));
console.log(typeof { name: "John" });
console.log(typeof function () {});