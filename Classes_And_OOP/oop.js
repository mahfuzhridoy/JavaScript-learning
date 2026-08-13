//  Object literals

const user = {
    uname : "Mhz",
    login_count : 8,
    signed_in : true,
    getUserDetails: function(){
        console.log("Got user details");
        console.log(this.uname);
        return this.login_count
    }

}

// console.log(user.getUserDetails())
// this keyword defines the current context. suppose there are two objects, both of them has username key. if you are calling a uname key, the function does not know whuich uname you are talking about. so with this keyword, the function finally know you are talking about current context. not rom other object uname.


// Constructor function

// const promise = new Promise()
// const date = new Date()  // new keyword creates new context. 

function user1(username, login, isLoggedin){
    this.username = username
    this.login = login 
    this.isLoggedin = isLoggedin
    // Here this keyword defines the current context variable who are defined inside this functional scope and othe variables without this keyword are parameter vaules that are passed
    this.greeting = function(){
        console.log(`hello ${this.username}`);
        
    }

    return this
   
}

// const userOne = user1("monir", true, false)
// const userTwo = user1("enayet", false, true) // This will override the previous method with new values.
// console.log(userOne);

// to avoid this situation we use new keyword


const userOne = new user1("monir", true, false)
const userTwo = new user1("enayet", false, true) // This will not override the previous method with new values.
// console.log(userOne);
// console.log(userTwo);
userTwo.greeting()

// When we use new keyword
// 1. empty object/instance is created
// 2. constructor function is called
// 3. injected this keyword
// 4. we finally get the value