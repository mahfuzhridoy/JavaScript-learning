// //Numbers and Maths

// const score = 400
// console.log(score);

// const balance = new Number(100); 
// console.log(balance, typeof balance); // output: [Number: 100] 'object'. it is not recommended to use Number constructor to create numbers in JavaScript. it stores number as key value pair. it is mostly used for type of applications like games where we need to access individual digits of the number.

// console.log(balance.toString(), typeof balance.toString()); // output: '100'. it converts the number to string.

// const newBalance = 123.52342

// console.log(newBalance.toFixed(2), typeof newBalance.toFixed(2)); // output: '123.52'. it converts the number to string with 2 decimal places. This rounds the number to the nearest integer and returns a string representation of the number with the specified number of decimal places. It prioritize the decimal places over the significant digits. For example, if we have a number 123.456 and we use toFixed(2), it will return '123.46' because it rounds the number to 2 decimal places. If we use toFixed(4), it will return '123.4560' because it adds 2 more decimal places to the number.

// console.log(newBalance.toPrecision(4), typeof newBalance.toPrecision(4)); // output: '123.5'. it converts the number to string with 4 significant digits. It prioritizes the significant digits over the decimal places. For example, if we have a number 123.456 and we use toPrecision(4), it will return '123.5' because it rounds the number to 4 significant digits. If we use toPrecision(6), it will return '123.456' because it adds 2 more significant digits to the number.

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // output: '1,000,000'. it converts the number to string with commas as thousands separators. It uses the locale string to format the number. For example, if we have a number 1000000 and we use toLocaleString('en-US'), it will return '1,000,000' because it uses commas as thousands separators. If we use toLocaleString('de-DE'), it will return '1.000.000' because it uses dots as thousands separators.


// // Properties of Number object in JavaScript:

// console.log(Number.MAX_VALUE); // output: 1.7976931348623157e+308. it returns the maximum numeric value representable in JavaScript.
// console.log(Number.MIN_VALUE); // output: 5e-324. it returns the minimum numeric value representable in JavaScript.
// console.log(Number.POSITIVE_INFINITY); // output: Infinity. it returns the positive infinity value.
// console.log(Number.NEGATIVE_INFINITY); // output: -Infinity. it returns the negative infinity value.
// console.log(Number.NaN); // output: NaN. it returns the NaN (Not-a-Number) value.
// console.log(Number.MAX_SAFE_INTEGER); // output: 9007199254740991. it returns the maximum safe integer value representable in JavaScript.





//++++++++++++++++++++++++++++++++++++++++++++++++++Math++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// //Properties of Math object in JavaScript:

// //Test the code in browser dev tools to see all the properties and methods of Math object
// console.log(Math.PI); // output: 3.141592653589793. it returns the value of PI.
// console.log(Math.E); // output: 2.718281828459045. it returns the value of Euler's number.

// console.log(Math.abs(-4)); // Returns absolute value an converts the negative sign to a positive.
// console.log(Math.round(5.3)); // rount of the number like we use in maths.

// console.log(Math.ceil(5.8)) // returns the celling value, so the output will be 6
// console.log(Math.floor(5.8)) // output : 5. this returns the floor value


// console.log(Math.sqrt(25)); // returns square root.
// console.log(Math.min(2, 3, 4, 8, 0)); // Returns the minimum value.
// console.log(Math.max(2, 3, 4, 8, 0)); // Returns the maximum value.



console.log(Math.random()); // returns value between 0 and 1
console.log(Math.floor((Math.random())) * 10 + 1); // this will not return 0.

const min = 10
const max = 20



// This line is very important ****************************************************************************************

console.log(Math.floor(Math.random() * (max - min)) + min)
