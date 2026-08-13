// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return this.password*3
//     }

//     changeName(){
//         return this.username.toLowerCase()
//     }
// }

// const user = new User("Mahfuz", "idiot@gmail.com", 1234)

// const name = user.changeName()
// console.log(name);

// console.log(user.encryptPassword());


// Doing same work with function and prototypes



function User(username, email, pass){
    this.username = username
    this.email = email
    this.pass = pass
}

User.prototype.changeName = function(){
    return `${this.username.toUpperCase()}`
}

const new_user = new User("monir", 'boka@abcd.com', 'lamia')
console.log(new_user.changeName());


