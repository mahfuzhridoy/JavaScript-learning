// // Arrays the basic data structure

const myArr = [0, 2, 4, 1, 5, 6, 9, "hello"] // this is not data type specific. array can contain elements of any data types. Arrays can not be accessed by arbitrary string.

// console.log(myArr[0]);

// // array makes shallow copies. the shallow copy uses a copy reference point. changing a value can change in main array.

// const myHeros = ["Ironman", "spiderman"];

// const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(typeof myArr2);


// Array methods

myArr.push(6); // push method add a new element at the end of the array.
//console.log(myArr);

myArr.pop(); // Removes last element from the array. 
//console.log(myArr)

// Some similar methods are unshift and shift. unshift adds new element at the beginning of the array and shift removes the first element.
 
myArr.unshift(9); // inserts the parameter into the beginning of the array
myArr.shift(); // removes first element of the array
//console.log(myArr, myArr.length)


// console.log(myArr.includes(9)) // returns boolean value saying if the element exists or not.
// console.log(myArr.indexOf(9)) // returns the index number of the array element.
// console.log(myArr.includes("Hello")) // string searching is case sensitive. the search string must be matched as exact same.


// converting an existing array to a string using join() method.

const newArray = myArr.join();
// console.log(newArray, typeof(newArray));
// console.log(myArr, typeof(myArr));
console.log(myArr.toString)

 // slice, splice methds;

 console.log("A ", myArr)

 const newarray1 = myArr.slice(1, 5) // the last value of the range is not included in slice method
 console.log("B ", newarray1) 

 const newarray2 = myArr.splice(1, 5) // the index 5 will be included in this array. We can see it by printing the original array again
 console.log("C ", newarray2)
 console.log(myArr) // output: [0, 9, "hello"]. why? because splice method not only prints but also changes the array.
