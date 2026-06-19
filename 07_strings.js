//strings are most commonly used data type in programming. They are used to represent text and can be created using single quotes, double quotes, or backticks in JavaScript.

// for example: 
let str1 = 'Hello, World!'; // using single quotes

console.log(`I want to say say ${str1}`); // using backticks for string interpolation

// const gameName = new String('Find the goat');
// 
const gameName = `Find the goat`;
// using String constructor. this stores word as key value pair. it is not recommended to use String constructor to create strings in JavaScript. it stores index as key and character as value. mostly used for type of applications like games where we need to access individual characters of the string.


// we can access individual characters of the string using index. the index starts from 0. so to access the first character of the string we can use index 0.

// console.log(gameName[0]); // output: C
// console.log(gameName[1]); // output: h
// console.log(gameName[2]); // output: e
// console.log(gameName[3]); // output: s
// console.log(gameName[4]); // output: s

// // we can also use charAt() method to access individual characters of the string.
// console.log(gameName.charAt(0)); // output: C
// console.log(gameName.charAt(1)); // output: h
// console.log(gameName.charAt(2)); // output: e
// console.log(gameName.charAt(3)); // output: s
// console.log(gameName.charAt(4)); // output: s




// there are so many methods we can use with strings in javascript. some most common methods of them are given below with the use case and example:

// //1. length: it returns the length of the string.
// console.log(gameName.length); // length is not a method, it is a property of the string. some other properties are constructor, prototype, etc.
// //2. toUpperCase(): it converts the string to uppercase.
// console.log(gameName.toUpperCase());

// //3. console.log(gameName.substring(0, 4)); // output: Find. it returns the part of the string between the start and end index. the end index is not included in the result.

const newString = gameName.substring(3, 4); // if we add negative index in slice method, it counts from the end of the string. so -1 is the last character of the string, -2 is the second last character of the string and so on. in this case, -4 is the fourth last character of the string which is 'g' and 8 is the index of the character 't'. so it returns 'goat'.
console.log(newString);



// 4. 