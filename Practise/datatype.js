// JavaScript Data Types Examples

// Primitive Data Types

// 1. String - Represents textual data
const name = "arjiya";
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
console.log(greet("arjiya")); 

// 4. Date - Represents dates and times
const today = new Date();
console.log(today); 

// Special Cases

// Type `typeof` Operator - Used to determine the type of a variable
console.log(typeof "Hello"); 
console.log(typeof 42); 
console.log(typeof true); 
console.log(typeof undefined); 
console.log(typeof null); 
console.log(typeof Symbol("id")); 
console.log(typeof { name: "arjiya" }); 
console.log(typeof function () {});