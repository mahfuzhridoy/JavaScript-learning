
// Stack memory is used for static memory allocation, which includes primitive data types and function calls. It operates in a last-in-first-out (LIFO) manner, meaning that the last item added to the stack is the first one to be removed. The stack is typically faster than the heap because of its simple structure and memory management.

// Heap memory is used for dynamic memory allocation, which includes non-primitive data types like objects and arrays. It allows for more flexible memory management, but it can be slower than the stack due to fragmentation and the need for garbage collection.

// In JavaScript, primitive data types (such as numbers, strings, booleans, null, undefined, and symbols) are stored in the stack memory. When you assign a primitive value to a variable, it holds a copy of that value. If you change the value of the variable, it does not affect any other variable that holds the same value because they are stored separately in the stack.

// For example:

let num = 42; // num is stored in stack memory
console.log(num); // output: 42

let anotherNum = num; // anotherNum holds a copy of the value of num, also stored in stack memory
console.log(anotherNum); // output: 42

num = 100; // changing the value of num
console.log(num); // output: 100
console.log(anotherNum); // output: 42, because anotherNum holds a copy of the value of num, so it is not affected by the change in num.

// On the other hand, non-primitive data types (such as objects and arrays) are stored in heap memory. When you assign a non-primitive value to a variable, it holds a reference to that value in memory. If you change the value of the variable, it affects all variables that hold a reference to the same value because they point to the same location in heap memory.

// For example:

let user = {
    "name": "Mahfuz",
    "email": "mahfuz@gmail.com",
    "age": 26
}

let anotherUser = user; // anotherUser holds a reference to the same object in heap memory
console.log(anotherUser.name); // output: Mahfuz

user.name = "John"; // changing the name property of user

console.log(anotherUser.name); // output: John, because anotherUser holds a reference to the same object in heap memory, so it reflects the change made to user.

