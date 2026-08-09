// fetch('http://example.com').then() // If the request is completed then it is received the then() method. if error occurs then it appears on catch() method and finally() method does it all

//const promiseOne = new Promise(function(resolve, reject){ // ressolve and reject are two variables that create two function. we could use success, failure too. their job is based on positions not name. but we must use the parameter name as same inside the function to call that function.
    // Do an async task
    // DB calls, cryptography, networkcalls

//     setTimeout(function(){
//         console.log("Async task is complete", 2000)
//         resolve() // without this resolve() method the function will not send the response to .then() method thus resulting no consumption of promise
//     })
// })

// .then() methos directly connected with resolve

// promiseOne.then(function(){
//     console.log("Promise consumed");
    
// })


// Without assigning the promise function to the variable





// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task two");
//         resolve() // forgot to call this function again
//     }, 1000)
// }).then(function(){ // because of we didnt hold it inside a variable, we directly accessed or consumed the promise 
//     console.log("Async two resolved");
// })





// Passing values through the resolve() method





// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({ // we can pass values or responses through this resolve method parameter.
//             "name": "Mahfuz",
//             "email": "example.com"
//         })
        
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user.name);
    
// })





// Chaining of .then() method







// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false // for test
//         if(!error){
//             resolve({username: "monir", password: "bokachondro"})
//         }
//         else{
//             reject("ERROR: Somethingwent wrong")
//         }
//     }, 3000)
// })


// promiseFour.then((user) => {
//     console.log(user.username);
//     return user.username;
    
// }).then(function(username){
//     console.log(username);
    
// }).catch(function(error){
//     console.log("Something went wrong");
    
// }).finally(function(){ // this is a default. it will be called at all cases
//     console.log("The promise is either resolved or rejected");
    
// })




// Async Await method







// const promiseFive = new Promise(function(success, failure){
//         setTimeout(function(){
//         let error = false // for test
//         if(!error){
//             success({username: "JS", password: "123"}) // resolve
//         }
//         else{
//             failure("ERROR: Somethingwent wrong") //reject
//         }
//         }, 3000)
// })

// async function consumedPromiseFive(params) {

//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log("Error: Something went wrong");
        
//     }
    
// }

// consumedPromiseFive()








// API consumption with JSON 

// async function getAllusers(){
//     try {
//     const response = await fetch('https://api.github.com/users/mahfuzhridoy')
//     const data = await response.json() // the response also takes time. first we immediately logged the data without waiting for the response thats why it did not gave any response
//     console.log(data.login);
    
//     } catch (error) {
//     console.log("error");       
//     }
    
// }

// getAllusers()



// .then() usage for api

fetch('https://api.github.com/users/mahfuzhridoy')
.then(function(response){
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error)
})