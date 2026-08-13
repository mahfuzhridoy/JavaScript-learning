const User = {
    _email: "example@email.com", 
    _pass : 1234,

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}


// Factory function
const new_user = Object.create(User)
console.log(new_user.email)