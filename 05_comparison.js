// some basic comparisons 
let a = 5;
let b = 10
console.log(a == 5); // output: true, because a is equal to 5
console.log(a != 5); // output: false, because a is not equal to 5
console.log(a > 5); // output: false, because a is not greater than 5
console.log(a < 5); // output: false, because a is not less than 5
console.log(a >= 5); // output: true, because a is greater than or equal to 5
console.log(a <= 5); // output: true, because a is less than or equal to 5

// we can also compare two variables using the comparison operators. for example:

console.log(a == b); // output: false, because a is not equal to b
console.log(a != b); // output: true, because a is not equal to b
console.log(a > b); // output: false, because a is not greater than b
console.log(a < b); // output: true, because a is less than b
console.log(a >= b); // output: false, because a is not greater than or equal to b
console.log(a <= b); // output: true, because a is less than or equal to b

// we can also compare two variables using the strict equality operator (===) and the strict inequality operator (!==). these operators compare both the value and the type of the operands. for example:

// now lets do some confusing comparisons

console.log(5 == "5"); // output: true, because the == operator performs type coercion and converts the string "5" to a number before comparing it to the number 5.
console.log("5" == 5); // output: true, because the == operator performs type coercion and converts the string "5" to a number before comparing it to the number 5.

// to overcome this confusion, we can use the strict equality operator (===) and the strict inequality operator (!==). these operators do not perform type coercion and compare both the value and the type of the operands. for example:

console.log(5 === "5"); // output: false, because the === operator does not perform type coercion and compares both the value and the type of the operands. in this case, 5 is a number and "5" is a string, so they are not equal.
console.log("5" === 5); // output: false, because the === operator does not perform type coercion and compares both the value and the type of the operands. in this case, "5" is a string and 5 is a number, so they are not equal.

// now comparison with null and undefined

console.log(null > 0); // output: false, because null is not greater than 0
console.log(null >= 0); // output: true, because null is considered equal to 0 when using the >= operator
console.log(null < 0); // output: false, because null is not less than 0

console.log(undefined > 0); // output: false, because undefined is not greater than 0
console.log(undefined >= 0); // output: false, because undefined is not greater than or equal to 0
console.log(undefined < 0); // output: false, because undefined is not less than 0