console.log(Math.PI)
Math.PI = 4
console.log(Math.PI);



// Find out the properties of Math.PI

const descriptor =  Object.getOwnPropertyDescriptor(Math, "PI") // First enter the library name then property name inside double quotes

console.log((descriptor));


// Creating my own object with same properties

const myObj = {
    name: "Mahfuz",
    email: "Mahfuzur@gmail.com",
    pass: "12334"
}

console.log(Object.getOwnPropertyDescriptor(myObj, "email"));
Object.defineProperty(myObj, "email", {
    writable: false,
    enumerable: false,
    configurable: false
})

for (const [key, value] of myObj) { // This loop will now not run because this object is not enumurable any more. I have set it to false
    console.log(key, value);
}


console.log(Object.getOwnPropertyDescriptor(myObj, "email"));

myObj.email = "monir" // the email can not be changed now, we set the writable property to false.
console.log(myObj.email);
