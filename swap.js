// Swapping Using a Third Variable
let a = 5;
let b = 10;

console.log("Before swapping (using third variable): a =", a, ", b =", b);

Using a third variable
let temp = a;
a = b;
b = temp;

console.log("After swapping (using third variable): a =", a, ", b =", b);

// Swapping Without Using a Third Variable

// Resetting values
// a = 5;
// b = 10;

// console.log("\nBefore swapping (without third variable): a =", a, ", b =", b);

// Using arithmetic operations
// a = a + b;  // a becomes 15
// b = a - b;  // b becomes 5
// a = a - b;  // a becomes 10

// console.log("After swapping (without third variable, arithmetic): a =", a, ", b =", b);

// Resetting values
// a = 5;
// b = 10;

// console.log("\nBefore swapping (without third variable, XOR): a =", a, ", b =", b);

// Using XOR operation
// a = a ^ b;  // a becomes 15 (binary XOR of 5 and 10)
// b = a ^ b;  // b becomes 5 (binary XOR of 15 and 10)
// a = a ^ b;  // a becomes 10 (binary XOR of 15 and 5)

// console.log("After swapping (without third variable, XOR): a =", a, ", b =", b);
