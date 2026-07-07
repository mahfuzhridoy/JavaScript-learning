// We will learn about while and do while loops in this code

// While loop is similar to for loop but the initialisation here begins befor the loop structure. for example:
let index = 10
while (index > 5) {
    console.log(`Argentina lost to Egypt`);
    index--;    // the increment and decrement of while loop happens at the end of the loop scope 
}

// Do while loop

// Do while loop is different. the main difference is do while will execute once for sure. then the other loop function will work. There are some special use case for do while loops but not used too much.

let count = 10

do {
    console.log("Hello");
    count --
} while (count > 5);   // the condition is checked outside the loop scope. this loop will atleast print hello once even if the condition is false

