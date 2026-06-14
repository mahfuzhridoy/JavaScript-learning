"use strict"; //treat all js code as newer version

let name = "mahfuz" // string data type
let age = 27 // number data type
let isLoggedIn = true // oolean data type
let state; // undefined data type. this means the variable is declared and value is not assignd yet
let accountBalance = null; // null data type. this means the variable is declared but value is explicitly set to nothing

// symbol data type is used to create unique identifiers. it is not commonly used in everyday programming
//bingint data type is used to represent integers that are too large to be represented by the number data type. it is denoted by appending 'n' to the end of the number. for example: let bigInt = 1234567890123456789012345678901234567890n;

console.log(typeof name); // output: string
console.log(typeof age); // output: number
console.log(typeof isLoggedIn); // output: boolean
console.log(typeof state); // output: undefined
console.log(typeof accountBalance); // output: object (this is a quirk in JavaScript, null is considered an object) 