// we can use forEach method on array

const coding = ["js", "C++", "JAVA", "C#", "Python"]

// we need to add a call back function to work with forEach() method

coding.forEach( function name(value){ 
    // console.log(value)
} )



// can we pass pre declared functions instead of creating a cunction inside parenthesis? Yes we can.

function greet(item){
   // console.log(item)
}

// greet(coding); // This line prints the whole array because we are passing the whole array

coding.forEach(greet) // we are not using parenhtesis for greet function because we are passing it for referemce as the replacement of callback function, not to execute this function here


// We can also use arrow function

// coding.forEach( (value) => console.log(value) ) 



//coding.forEach( (value) => {console.log(value)} ) 

coding.forEach( (item, index, arr) => { // here the variables will hold the item, index number, whole array in order. this is fixed for first varable to hold item, second variable to hold index, third variable to hold array. this is how this worked. 
    //console.log(item, index, arr)
} )


// for each method in array containing objects

const myCoding = [
    {
        languageName : "JAVA",
        fileExtension : "java"
    },
    {
        languageName : "Python",
        fileExtension : "py"
    },
    {
        languageName : "Javascript",
        fileExtension : "js"
    },
    {
        languageName : "C++",
        fileExtension : "cpp"
    },
    {
        languageName : "C",
        fileExtension : "c"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
} )

// We can access the properties of objects inside an array by this coding structure

// If we want to print the result for an specific index, we would have to use if else condition.