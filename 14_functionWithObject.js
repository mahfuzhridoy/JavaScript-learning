// Functions with objects and array

// Shopping cart function. adding price of products

function calculatePrice(...num1){   /// ... here is rest operator
    return num1
}

// console.log(calculatePrice(2)); // what if we send multiple values? because there is no limit. to calculate that we need to use rest operator. using three dots in front of the parametervariable. this will input the values inside an array and the variable will act as array data type

//console.log(calculatePrice(200, 300, 400, 500));


// How can we pass object inside a function? lets see below


const user ={
    name: "monir",
    password : "abcd1234"
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.name} and password is ${anyObj.password}`) // the key must match with the original object key. else this will return undefined
   
}

console.log(handleObject(user));



// How to pass array inside function

const myArray = [200, 300, 400]

function getArray(testarray){ //This function returns secod lement of the array passed via the parameter.
    return testarray[1]
}

console.log(getArray(myArray));




