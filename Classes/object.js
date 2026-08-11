function multiply(num){
    return num * 5
}

multiply.power = 2
console.log(multiply(3));
console.log(multiply.power);
console.log(multiply.prototype);


// Created a new constructor function
function createUser(uname, price){
    this.uname = uname
    this.pass = price
}
// added a method to the create createuser constructorfunctio
createUser.prototype.increment = function(){
    this.pass++
}
// Added another usable function
createUser.prototype.changeName = function(){
    this.uname = "Changed"
}

// Created a object using new instance of the createUser constructor function
const chai = new createUser("Coffee", 25)

// used the added methods
chai.increment()
chai.changeName()
console.log(chai.pass, chai.uname)


/*
A new object is created for using new keyword

A prototype gets linked to the property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype

The new object is returned after the constructor function is called
*/




