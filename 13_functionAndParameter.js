// Functions and parameters in javascript is a block of code that can be used by simply calling its name. This helps to reduce writing repetative code and reuse the code which makes the code more efficient.


function myName(){
    console.log("I am mahfuzur ranhman")
}  // the curly brackets are the scope of the function. the code inside the curly brackets are part of the function.

//myName(); // calling the function. the brackets are the execution of code. if we do not use the parentheses, the code inside the parentheses will not be executed. 


// Function with parameter

function addNumber(number1, number2){
    console.log(number1 + number2)
    
}

//addNumber(5, "4"); // this will give output 54. remember string concateation? the plus converts number or other data type to string if any of the operand is string.

//addNumber(8, 10); // now this will output 18. these are argument passing. the arguments are both number data type.

// Storing the function inside a variable.

const result = addNumber(5, 2)
//console.log(result) // this will return value but also return an undefined. because we did not returned any value


function addTwonumber(num1, num2){
    //const number = num1 + num2
    //return number; // we are returning the result of the addition. we can also do it directly.
    return num1 + num2; //this will give the same output 
}

const output = addTwonumber(4, 4)
console.log(output);

function login(username = "Noob"){
    if(!username){
        console.log("Please enter a usernme!")
        return // The return function here will exit from the function.
    }
    return `${username} Just logged in`
}

login("Mahfuz") // this will not print the result because we did print the string.

console.log(login()) // Now this will print the result




