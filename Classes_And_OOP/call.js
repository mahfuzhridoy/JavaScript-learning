function setUsername(uname){
    this.uname = uname
}

function createUser(uname, email, password){
    setUsername.call(this, uname) // call method with this parameter gives this current execution context to the called function

    this.email = email
    this.password = password
}

const obj = new createUser("Mahfuz", "mahfuz@gmail.com", "kali")
console.log(obj.email);
