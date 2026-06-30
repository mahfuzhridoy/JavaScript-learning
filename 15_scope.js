// To learn scope, first we need to learn about let, var, and const. the var does not work scopewise. that is why nowdays let are used. the scope is defined by curly braces. curly braces in object are for object declaration, but in other places, these are used to define the scope.

if (true){
    let a = "hello"
const b = "mahfuz"
var c = "anything"
}

// console.log(a) // this should give an error because a is not defined in this scope, the scope of this a variable is inside the if condition. similarly for variable b.
// console.log(b)
// console.log(c) // This line will print the output which is or a good idea. 

// there are 2 type of scope local scope and global scope. local scope are only locally available but global scopes can be accessed from anywhere.

//******************************* Local and Global +++++++++++++++++++++++++++++++++++++++++

function one(){
    const username = "mahfuz"

    function two(){
        const website = "yutube"
        console.log(username)
    }

    //console.log(website)

    two()
}

one()


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

addone(5) // this will not give an error because we can access functions adove the declaration line.

function addone(num){
    return num + 1
}



const addtwo = function(num){ // this is also a function but sometimes it is called expression. if we try to execute this function above the declaration line, this will give an error.
    return num + 2
}

addtwo(5)