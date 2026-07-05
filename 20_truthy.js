// There are some truthy and falsy values. 

const userEmail = "example@example.com" // any value inside a string returns true value. empty returns false.

if (userEmail){
    console.log("Got the user email");
    
} else {
    console.log("email not found");
    
}

// some Falsy values:

// 0, false, -0, 0n, null, undefined, NaN, "" (empty string),   These are falsy values. except these all other are truthy values.

// Some truthy that may confuse you

// "0", 'false', " " (string with space), [], {}, function(){}, 


// some quick check

if (userEmail.length === 0){
    console.log("Array is empty");
    
}


const emptyObject = {}

if (Object.keys(emptyObject).length === 0){
    console.log("The object is empty");
    
}

// false == 0 // true
// false == '' // true
// false == null // true


// +++++++++ Nullish coalescing operator (??) +++++++++++

let value1;
value1 = 5 ?? 10; // if value1 is null or undefined then it will return 10 otherwise it will return 5.
console.log(value1);

value1 = null ?? 10; // this will store 10
console.log(value1);

value1 = undefined ?? 10 ?? 20; 
console.log(value1); // this will store 10 because first value is undefined and the next value is 10.


// +++++++++++++ Ternary operatr ++++++++++++++++

// This looks similar to null coaliscing operator but work is different. it is used to check a condition and return a value bades on that condition.

const teaPrice = 100;

teaPrice < 200 ? console.log("Thea is cheap") : console.log("Tea is expensive"); // if codition is true then returns firs value, if false then returns second value.




