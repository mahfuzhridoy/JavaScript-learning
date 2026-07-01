// This keyword is used to refer the current object. this keyword is used in object and function not in arrow function.

const user = {
    uname : "Mahfuz",
    price : "200",

    welcomeUser : function(){
        console.log(`Welcome to the website ${this.uname}`) // what if we only print  this? lets find out.
        console.log(this); // it prints the whole object with current context. If we print this keyword on a global scope, it will print the window object when we are in browser environment. but in node environment, it will print an empty object.
        
    }
} // here this keyword indicates the current context of the object.

//user.welcomeUser(); 
//user.uname = "Mahfuzur Rahman"
//user.welcomeUser() // this line will print Mahfuzur rahman because we did not hardcode the username, we used this keyword so we can change the message dynamically.
//

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function testThis(){
    let username = "mahfuzur"
    console.log(this.username); // this will print undefined because this keyword is not used in a object context. it is used in a function context.
}

testThis();

// Now lets practice arrow function

const arrowFunction = () => {
    let uname = "Pagla"
    console.log(uname)
}

arrowFunction();

// basic arrow function syntax

() => {  // this type of nameless arrow functions are used in IIFE functions which calls itself immediately. we can not call it later since it does not have a name
    console.log("Arrow function without a name")
}


// Implicit return

const addTwo = (num1, num2) => (num1 + num2) // this is an implicit return. we can write it without parenthesis, we dont have to use return keyword and curly braces. but if we use curly braces, we must use return keyword.

console.log(addTwo(5, 5));





