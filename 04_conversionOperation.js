// let value = 3
// let negValue = -3
// console.log(negValue);

// // Basic operations in JavaScript include addition (+), subtraction (-), multiplication (*), division (/), and modulus (%). these operations can be performed on numbers, strings, and other data types. for example:

// let num1 = 10
// let num2 = 5

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

// These are some basic arithmetic operations. Some othe roperations include  increment, decrement, exponentiation, and assignment operations. for example:

// let num3 = 10
// num3++; // increment operator, adds 1 to the value of num3
// console.log(num3); // output: 11

// num3--; // decrement operator, subtracts 1 from the value of num3
// console.log(num3); // output: 10

// let num4 = 2;
// let num5 = 3;
// let result = num4 ** num5; // exponentiation operator, raises num4 to the power of num5
// console.log(result); // output: 8 

// // assignment operators are used to assign values to variables. the most common assignment operator is the equal sign (=). for example:

// let num6 = 10; // assigns the value 10 to the variable num6
// console.log(num6); // output: 10

// we can also concatenate strings or different data types using the + operator. like adding string with number data type. for example:

// let str1 = "Hello";
// let str2 = "World";
// let str3 = str1 + " " + str2; // concatenates str1 and str2 with a space in between
// console.log(str3); // output: Hello World

// // or we can add them like this:

// console.log(str1 + " " + str2); // output: Hello World
// console.log("hello" + " World2")

// // Now lets try adding a string with a number data type. for example:

let str4 = "The number is: ";
let num7 = 10;
let result2 = str4 + num7; // concatenates str4 and num7
console.log(result2); // output: The number is: 10

// or we can do it like this:
console.log("The number is: " + num7); // output: The number is: 10 

// now lets do some confusing operations
console.log("10" + 5); // output: 105, because the + operator is used for string concatenation when one of the operands is a string. in this case, "10" is a string and 5 is a number, so the + operator concatenates them to produce the string "105".

console.log("10" - 5); // output: 5, because the - operator is used for subtraction when both operands are numbers. in this case, "10" is a string that can be converted to a number, so the - operator converts it to the number 10 and then subtracts 5 to produce the result 5.

console.log(1 + "2" + 3); // output: 123, because the + operator is used for string concatenation when one of the operands is a string. in this case, 1 is a number, "2" is a string, and 3 is a number, so the + operator concatenates them to produce the string "123".

console.log(1 + 2 + "3"); // output: 33, because the + operator is used for string concatenation when one of the operands is a string. in this case, 1 and 2 are numbers, and "3" is a string, so the + operator first adds 1 and 2 to produce the number 3, and then concatenates it with the string "3" to produce the string "33".

// the main thing is when the string is in the midddle and the operator precedence is from left to right. it finds that a number is being added to the string, so it converts the number to the string and adds them. for the secons + operation, the first two is already converted to string, so in this case again same type of operation is happening. so the whole expression is converted to string and output is 123. 

// now in second case when the string is at the end, the first two numbers are added using the + operator, then comes the number and string addition part. so the first two number are added to produce 3 and then it is added with the end string "3" to produce the final output "33".

