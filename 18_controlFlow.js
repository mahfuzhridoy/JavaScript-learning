// control flow statemnts

//if statement

if(true){
    // if the condition is true then this block of code will be executed
    console.log("The condition was true"); // if we add the conidtion as literal true, then the block of code will be absolutely executed
    
}

let isloggedin = false;

if (isloggedin == true){
    console.log("User is logged in"); // this block of code will not be executed because the condition is false. we can set the condition in other ways too.
    
}

if(isloggedin){
    console.log("another way of setting the condition") // this type of condition return boolean value by default.
}

if(!isloggedin){
    console.log("This will be executed");
    
}

// some other comparioson operators ==, !=, <, >, <=, >=, ===, !==


// exercise: nested if else statement.

const temparature = 27

if (temparature > 30){
    console.log("tempaarature is more than 30 degree");
    
}

else if (temparature < 30){
    console.log("the temperature is below 30 degree");
    
}

else{
    console.log("Error");
    
}


// && , || logical operators

const balance = 1000;

if (balance > 500 && balance < 1200) { // if both condition are thrue, only then the block of code will be executed. we can add more conditions here too.
    console.log('Balance is betwee 500 and 1200');
    
}

if (balance < 500 || balance < 1200) { // if any of the condition is true, the block of code will run.
    console.log(" Or logical operator worked");
    
} 

// real life example of if else statement

loggedIn = true;
emailVerified = false;
guestUser = false;
phoneVerified = true;
username = "Mahfuz"

if (loggedIn){
    if (emailVerified || phoneVerified){
        console.log(`${username} is logged in and verified`)
    }

    else if(guestUser){
        console.log(`Please verify your email ${username}`);
        
    }

    else{
        console.log(` please login first `)
    }
}
