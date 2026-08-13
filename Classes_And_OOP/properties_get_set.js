function User(uname, pass){
    this.uname = uname
    this.pass = pass

    Object.defineProperties(this, 'uname', {
        get: function(){
            return this._uname.toUpperCase()
        },
        set:function(value){
            this._uname = value
        }
    })

    
}

const user = new User("Mahfuz", "1234")


