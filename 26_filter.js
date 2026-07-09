// We will learn about map and filter


// const coding = ["js", "C++", "JAVA", "C#", "Python"]

// const values = coding.forEach( (item) => {
//     console.log(item);
    
// } ) // for each loop will not return any value. thats why however you print the values, it will say undefined too.

// console.log(values);



// Now we will leanrn filter method that returns value


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(nums.filter( (num) => num > 4 )); // we can print like this too.

const newNums = nums.filter( (num) => {   // Also like this we can store the loop inside a variable  !!!!
     return  num > 4 // We must use return keyword while using an curly braces to start a scope in arrow function. Implicit return will not work here
} ) 
// console.log(newNums)


// the code below will work as same as the code above. but we have used some logics and also reused some basic knowledge


// We used foreach method for the code below

// const numbers = []

// nums.forEach( (num) => {
//     if (num > 4){
//         numbers.push(num)
//     }
// } )

// console.log(numbers)




// Another exercise


const books = [
    {
        title: "Book One", genre: "Fiction", publish: "1981", edition: 2004
    },
    {
        title: "Book two", genre: "Non-Fiction", publish: "1992", edition: 2008
    },
    {
        title: "Book three", genre: "History", publish: "1999", edition: 2007
    },
    {
        title: "Book four", genre: "Non-Fiction", publish: "1989", edition: 2010
    },
    {
        title: "Book five", genre: "Science", publish: "2005", edition: 2004
    },
    {
        title: "Book six", genre: "Fiction", publish: "1990", edition: 2013
    },
    {
        title: "Book seven", genre: "History", publish: "1981", edition: 2004
    },
    {
        title: "Book eight", genre: "science", publish: "1982", edition: 2010
    },
    {
        title: "Book nine", genre: "Fiction", publish: "1951", edition: 1990
    }
]


let userBooks = books.filter( (book) => {
   return (book.genre === "History");
} )


userBooks = books.filter( (book) => book.edition < 2000  )


// books.filter( (book) => {
//    return (book.genre === "History");
// } )

// console.log(userBooks)







