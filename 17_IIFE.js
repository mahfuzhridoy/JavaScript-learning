// IIFE is a type of function that executes immediately. example usage like a file that connects with database. we would want to immediately connect with database right after the file is opened. so we can use this type of function.

// we can also immediately invoke the function using normal methods. but this type of function can be polluted by other functions. 

(function database(){
    // This is named iife function.
    console.log("Database connected")
})(); // the syntax = first parenthesis is for syntax and second one is for execution. But another important thing, when we use multiple iife function, we must use semicolon to separate them.

// database() // this will give an error because we can not call this function outside the scope.

// now IIFE with arrow function

(() => {
    // this is unnamed iife function.
    console.log("Database 2 connected")
})();

// Now what if we want to pass some parameter to the IIFE function? we can do it like this.

((name) => {
    console.log(`Hello ${name}`);
    
})('Mahfuz')


// we can also do it like this

let name = "Mahfuz"; //Always remember  to put a semicolon before and after an iife function to avoid unexpected errorss.

((name) => {
    console.log(`Hello ${name}`);
    
})(name)