//strings are most commonly used data type in programming. They are used to represent text and can be created using single quotes, double quotes, or backticks in JavaScript.

// for example: 
let str1 = 'Hello, World!'; // using single quotes

console.log(`I want to say say ${str1}`); // using backticks for string interpolation

const gameName = new String('Chess'); // using String constructor. this stores word as key value pair. it is not recommended to use String constructor to create strings in JavaScript. it stores index as key and character as value. mostly used for type of applications like games where we need to access individual characters of the string.

// we can access individual characters of the string using index. the index starts from 0. so to access the first character of the string we can use index 0.

console.log(gameName[0]); // output: C
console.log(gameName[1]); // output: h
console.log(gameName[2]); // output: e
console.log(gameName[3]); // output: s
console.log(gameName[4]); // output: s

// we can also use charAt() method to access individual characters of the string.
console.log(gameName.charAt(0)); // output: C
console.log(gameName.charAt(1)); // output: h
console.log(gameName.charAt(2)); // output: e
console.log(gameName.charAt(3)); // output: s
console.log(gameName.charAt(4)); // output: s




// there are so many methods we can use with strings in javascript. some most common methods of them are given below with the use case and example:

// 1. length: it returns the length of the string.
let str2 = 'Hello, World!';
console.log(str2.length); // output: 13

// 2. toUpperCase(): it converts the string to uppercase.
console.log(str2.toUpperCase()); // output: HELLO, WORLD!