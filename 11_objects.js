// objects are non-primitive(reference) data type. this is most used data type in JS.

// object literals

// there are two ways to create an object. using constructor or declaring like literals. when we create the object with costructor, it creates a singleton. a singleton is a creational design that restricts a class or constructor function from creating multiple objects. 

// singleton

// Object.create   /// this creates a singleton.

// object literals

const jsUser = {
    name : "Mahfuzur Rahman",
    "full name" : "Mahfuzur Rahman",
    age : 26,
    email : "example.com",
    location : "Dhaka",
    isLoggedin : false,
    lastLoginDays : ["Sunday", "monday"],

} 


/*    
console.log(jsUser.isLoggedin)  // We can access the properties by dot (.) operator. there are other ways to access. For example:

console.log(jsUser["age"]) // the parameter is passed like string becaus keys are processed and stored as string in objects. we need to know this method because if we declare the key in string format, we can not access the key property with dot operator. For example:

//console.log(jsUser."full name")  // this line will throw an error. correct way to access this key is using a square bracket. like above example.

*/



// using the symbol as key inside an object

let mySym = Symbol("key")
console.log(mySym)


const anotherObject = {
    name : "Mahfuz",
    [mySym]: "thunder" //to use symbol as key, this need to used inside square braces.

}

/*

console.log(anotherObject[mySym])
console.log(anotherObject.name)


// changing the value of keys of an object

// Changing value is so simple. example is given below
anotherObject.name = "Mahfuzur rahman" // now if we try to see the value of the key name, it has already changed. 
console.log(anotherObject.name)



// we can also freeze the object, so no one can change any value of the keys.

//Object.freeze(anotherObject) // now the anotherObject is freezed.

anotherObject.name = "hamba" // the change wont be written into object.
console.log(anotherObject.name) // output: Mahfuzur rahman. because the object is freezed.

*/

anotherObject.greetings = function greet(){
    console.log("Hello Mahfuz")
}

anotherObject.bless = "May allah bless you"  // we dont have to go to the object each time to add a new property, we can simply do it like this with the help of dot operator.


console.log(anotherObject.greetings()) // this will print greeting message. also will print undefined because the function returns nothing.

//console.log(anotherObject)



// Referring the same object with "this"


anotherObject.greeting2 = function greeting2(){
    console.log(`Hello there ${this.name}`);    // here "this"  referring to the same object (anotherObject) it is used inside. we could have used or called another object by simply using its name in the place of this.
}

console.log(anotherObject)
console.log(anotherObject.greeting2())




