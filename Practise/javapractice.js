// Commonly Used String Methods in JavaScript

// 1. `charAt(index)` - Returns the character at the specified index
const str = "Hello, World!";
console.log(str.charAt(0)); 

// 2. `concat()` - Joins two or more strings
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(", ", str2, "!")); 

// 3. `includes()` - Checks if a string contains a specified value
console.log(str.includes("World")); // Output: true

// 4. `indexOf()` - Returns the index of the first occurrence of a specified value
console.log(str.indexOf("World")); 

// 5. `lastIndexOf()` - Returns the index of the last occurrence of a specified value
const repeatedStr = "abca";
console.log(repeatedStr.lastIndexOf("a")); 

// 6. `slice(start, end)` - Extracts a part of a string
console.log(str.slice(7, 12)); 

// 7. `substring(start, end)` - Similar to `slice` but cannot accept negative indices
console.log(str.substring(7, 12)); 

// 8. `split(separator)` - Splits a string into an array of substrings
const csv = "apple,banana,cherry";
console.log(csv.split(",")); 

// 9. `toUpperCase()` - Converts a string to uppercase
console.log(str.toUpperCase());

// 10. `toLowerCase()` - Converts a string to lowercase
console.log(str.toLowerCase()); 

// 11. `trim()` - Removes whitespace from both ends of a string
const paddedStr = "   Hello, World!   ";
console.log(paddedStr.trim()); 

// 12. `replace(searchValue, replaceValue)` - Replaces occurrences of a substring
console.log(str.replace("World", "Universe")); 

// 13. `startsWith(searchString)` - Checks if a string starts with a specified substring
console.log(str.startsWith("Hello")); 

// 14. `endsWith(searchString)` - Checks if a string ends with a specified substring
console.log(str.endsWith("!")); 

// 15. `repeat(count)` - Repeats a string a specified number of times
console.log("Ha".repeat(3)); 
