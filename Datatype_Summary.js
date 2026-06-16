/*

//There are mainly 2 types of data types in JavaScript: Primitive and Non-Primitive (Reference) data types.

//Primitive data types include: these data types are immutable, meaning their values cannot be changed after they are created. When you assign a primitive value to a variable, it directly holds the value. When we assign the value on another variable and change the value of second or first variable, it does not affect the other variable. the use the copy of the value.

//1. Number: represents both integer and floating-point numbers. For example: 42, 3.14, -5, etc.
//2. String: represents a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `). For example: 'Hello', "World", `JavaScript`, etc.
//3. Boolean: represents a logical value that can be either true or false. For example: true, false.
//4. Null: represents the intentional absence of any object value. It is a primitive value that represents the absence of any object value. For example: null.
//5. Undefined: represents a variable that has been declared but has not been assigned a value. It is a primitive value that indicates that a variable has not been assigned a value. For example: undefined.
//6. Symbol: represents a unique identifier that can be used as a property key in objects. It is a primitive data type introduced in ECMAScript 2015 (ES6) that represents a unique identifier. Symbols are often used to create unique property keys in objects to avoid name collisions. For example: Symbol('mySymbol').

//example code for primitive data types:

let num = 42; // number
let str = "Hello, World!"; // string
let bool = true; // boolean
let nullValue = null; // null
let undefinedValue; // undefined
let sym = Symbol('mySymbol'); // symbol is a unique identifier that can be used as a property key in object. These are used as property key to avoid name collisions in objects. If we pass same value in the symbol function, Even then they will be different symbols. For example:

let sym1 = Symbol('mySymbol');
let sym2 = Symbol('mySymbol');
console.log(sym1 === sym2); // output: false, because sym1 and sym2 are different symbols, even though they have the same description 'mySymbol'.

//Now if we assign the value of num to another variable and change the value of num, it does not affect the other variable because they hold a copy of the value.

let anotherNum = num; // anotherNum holds a copy of the value of num
num = 100; // changing the value of num
console.log(anotherNum); // output: 42, because anotherNum holds a copy of the value of num, so it is not affected by the change in num.










//Non-Primitive (Reference) data types include: these data types are mutable, meaning their values can be changed after they are created. When you assign a non-primitive value to a variable, it holds a reference to the value in memory. When we assign the value on another variable and change the value of second or first variable, it affects the other variable. because both variables hold the reference to the same value in memory.


//If we change the values of object somewhere else, it will change the value of object everywhere because both variables hold the reference to the same value in memory. For example:





//1. Object:

let obj = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

console.log(obj.name); // output: John

let anotherObj = obj; // anotherObj holds a reference to the same object in memory
obj.name = "Mahfuz";

//now if i console log the name, i will get Mahfuz because the name is changed in memory by reference.

console.log(anotherObj.name); // output: Mahfuz, because anotherObj holds a reference to the same object in memory, so it reflects the change made to obj.






//2. Array:

let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // output: 1

let anotherArr = arr; // anotherArr holds a reference to the same array in memory
arr[0] = 100;

//now if i console log the first element of the array, i will get 100 because the first element is changed in memory by reference.

console.log(anotherArr[0]); // output: 100, because anotherArr holds a reference to the same array in memory, so it reflects the change made to arr.



*/


//3. Function:
function greet() {
    console.log("Hello, World!");
}
 
