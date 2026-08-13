class User {
    constructor(email, username){
        this.email = email
        this.username = username
    }


// getter and setter must exist both

// If the constructor function variable and getter/setter variable are same, Maximum call stack size exceeds. We must take different variable name

// The name of the methods (e.g. email) must be same with the constructor method property

    get email(){ // get method sends the value to the user. so output will be converted to upper case while sending out
        return this._email.toUpperCase()
    }

    set email(value){ // set method recives the value from variable and saves. So the email will originally be saved in lower case
        this._email = value
    }

}

const mahfuz = new User("mahfuz@gmail.com", "mahfuzhridoy")
console.log(mahfuz.email);
console.log(mahfuz.username);
