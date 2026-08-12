class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    static encryptPassword(){ //this method is now only usable inside this class nowhere else. It is made StaticRange. Its properties can not be inherited either
        return this.password*3
    }

    changeName(){
        return this.username.toLowerCase()
    }
}


class teacher extends User {
    constructor(){
        
    }
}

const user = new User("Mahfuz", "idiot@gmail.com", 1234)

const name = user.changeName()
console.log(name);

console.log(user.encryptPassword());
