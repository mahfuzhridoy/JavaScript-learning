// let muName = "Mahfuz    "

// console.log(muName.truelength())

let myHero = ["Hulk", "Spiderman"]

let heroPower = {
    Hulk: "body",
    spiderman: "sling",

    getHeroPower: function(){
        console.log(`${this.spiderman}`);
        
    }
}


// Creating a new method for all object and everything is  an objec. so it will work on arry, object, function.
Object.prototype.power = function(){
    console.log("New property is added to all object");
    
}
// Creating a new prototype for all Array
Array.prototype.superPower = function(){
    console.log("Super power added to the array");
    
}

// const name = "mahfuz"
// name.power()


myHero.power()
myHero.superPower()
heroPower.power()
// heroPower.superPower() // This line will produce an error. because superPower prototype was added for array only and heroPower is an object



// Prototypal inheritance

const user = {
    username: "uname"
}

const teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport // Properties of TeachingSupport are now inherited to the TAsupport object
}


const teach = new Object(TAsupport) // creating new object


console.log(teach.isAvailable) // we are accessing the property of TeachingSupport through TAsupport object because we have inherited the Teachng support property to the TAsupport object

// We can do it like this too

teacher.__proto__ = TAsupport

console.log(teach.fullTime);



// Modern syntax

// Object.setPrototypeOf(TeachingSupport, teacher) // Teaching support inherits all properties of user but it has become circular so it will give an error
// console.log(TeachingSupport.makevideo);





let username = "Name     "
String.prototype.truelength = function(){
    console.log(`${this.trim().length}`)
}

username.truelength()