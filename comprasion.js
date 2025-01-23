// == (Loose Equality)
console.log(5 == '5'); // true, because '5' is coerced to a number

console.log(0 == false); // true, because false is coerced to 0

console.log(null == undefined); // true, special case where null and undefined are considered equal

// === (Strict Equality)
console.log(5 === '5'); // false, different types (number vs string)

console.log(0 === false); // false, different types (number vs boolean)

console.log(null === undefined); // false, they are different types
