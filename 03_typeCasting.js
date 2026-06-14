// // This section for typecasting. this is process of converting the type of one variable to another.

// let age = "27"; // age is a string data type

// console.log(typeof(age))
//  let ageNumber = Number(age); // the string is converted to integer/number data type.
//  console.log(typeof(ageNumber)) 

// let num1 = "456a"; // this is a string data type that cannot be converted to a number because it contains non-numeric characters.

// let num1Number = Number(num1);
// console.log(num1Number) // output: NaN (Not a Number). this is a special value that indicates that the conversion failed because the string cannot be converted to a valid number.

// let num3Number = null;
// let num2Number = Number(num3Number);
// console.log(num2Number)

let booleanValue = true;
let booleanNumber = Number(booleanValue)
console.log(booleanNumber, typeof(booleanNumber)); // This will produce 1 because  true is = 1, false is  = 0 in all languages.


let stringValue = "Hello guys"
let stringNumber = Number(stringValue);
console.log(stringNumber, typeof(stringNumber)) // This will produce NaN because the string cannot be converted to a valid number.

// There are also other ways to convert string to number like parseInt() and parseFloat() functions. these functions are used to parse a string and return an integer or a floating-point number respectively. they will ignore any non-numeric characters at the end of the string and return the numeric part of the string. for example:

let num4 = "123.45abc";
let num4Int = parseInt(num4);
let num4Float = parseFloat(num4);
console.log(num4Int, typeof(num4Int)); // output: 123, number
console.log(num4Float, typeof(num4Float)); // output: 123.45, number

// However, if the string starts with non-numeric characters, both parseInt() and parseFloat() will return NaN. for example:

let num5 = "abc123.45";
let num5Int = parseInt(num5);
let num5Float = parseFloat(num5);
console.log(num5Int, typeof(num5Int)); // output: NaN, number
console.log(num5Float, typeof(num5Float)); // output: NaN, number

// we can convert values not only to number but also to string, boolean, bigint, symbol, etc. for example, if we try to convert a number to a bigint, we can use the BigInt() function. for example:

let num6 = 123;
let num6BigInt = BigInt(num6);
console.log(num6BigInt, typeof(num6BigInt)); // output: 123n, bigint

// we can also convert a number to a string using the String() function.