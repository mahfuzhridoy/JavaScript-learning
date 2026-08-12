class User {
    constructor(username) {
        this.username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{ // The properties of User class will now be added to the Teacher class
    constructor(username, email, pass){
        super(username) // This keyword makes the call easy, now we dont have to use call and this keyword. It will automatically pass current context
        this.email = email
        this.pass = "123"
    }

    addCourse(){
        return `New course was added by ${this.username}`
        
    }
}

const usr = new Teacher("Mahfuz", "email", "1234")
console.log(usr.addCourse());

console.log(usr instanceof Teacher); // Identifying is the usr created fro tme Teacher constructor

