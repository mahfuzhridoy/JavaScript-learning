// Inner function can access the variables or resources of outer function. but outer function can not access the resources of inner scopes
function outer(){
    let username = "Mahfuz"

    console.log(secret); // This is not accessible too. Parent function can not access child function resources
    

    function inner(){
        console.log("inner",username);
        let secret = "NOt secure"
    }
    function innerTwo(){
        console.log("inner",username);
        console.log(secret); // This is not accessible and will provide an error
        
    }
    inner()
    innerTwo()
}
outer()
console.log("Outer",username); // Not accessible from outside of function scope