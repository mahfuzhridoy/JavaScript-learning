// // // Arrays the basic data structure

// const myArr = [0, 2, 4, 1, 5, 6, 9, "hello"] // this is not data type specific. array can contain elements of any data types. Arrays can not be accessed by arbitrary string.

// // console.log(myArr[0]);

// // // array makes shallow copies. the shallow copy uses a copy reference point. changing a value can change in main array.

// // const myHeros = ["Ironman", "spiderman"];

// // const myArr2 = new Array(1, 2, 3, 4, 5)
// // console.log(typeof myArr2);


// // Array methods

// myArr.push(6); // push method add a new element at the end of the array.
// //console.log(myArr);

// myArr.pop(); // Removes last element from the array. 
// //console.log(myArr)

// // Some similar methods are unshift and shift. unshift adds new element at the beginning of the array and shift removes the first element.
 
// myArr.unshift(9); // inserts the parameter into the beginning of the array
// myArr.shift(); // removes first element of the array
// //console.log(myArr, myArr.length)


// // console.log(myArr.includes(9)) // returns boolean value saying if the element exists or not.
// // console.log(myArr.indexOf(9)) // returns the index number of the array element. If the element does not found, it returns -1 because, 0 is also an index number. to avoid confusion, it returns -1.
// // console.log(myArr.includes("Hello")) // string searching is case sensitive. the search string must be matched as exact same.


// // converting an existing array to a string using join() method.

// const newArray = myArr.join();
// // console.log(newArray, typeof(newArray));
// // console.log(myArr, typeof(myArr));
// console.log(myArr.toString)

//  // slice, splice methds;

//  console.log("A ", myArr)

//  const newarray1 = myArr.slice(1, 5) // the last value of the range is not included in slice method
//  console.log("B ", newarray1) 

//  const newarray2 = myArr.splice(1, 5) // the index 5 will be included in this array. We can see it by printing the original array again
//  console.log("C ", newarray2)
//  console.log(myArr) // output: [0, 9, "hello"]. why? because splice method not only prints but also changes the array.


//  console.log(myArr.includes("hello"));









 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Array part 2 +++++++++++++++++++++++++++++++++++++++++++++++++++



const marvelHeros = ["Thor", "Spider Man", "Iron Man"]
const dcHeros = ["superman", "Aquaman", "flash"]

//marvelHeros.push(dcHeros) // here the push method pushesh entire array dcHeros as the input. There is no problem or error in it because array can hold any data type element even arrays.

// console.log(marvelHeros) // printing the main array
// console.log(marvelHeros[3]) // printing the whole array inside the main array.
// console.log(marvelHeros[3][1]) // printing the element of the second array inside the first array.

// The concat method works similarly as the push method, but there is another way to use concat method to add only the elements of second array to first array

// marvelHeros.concat(dcHeros)
// console.log(marvelHeros) // output: similar as push method


// const allHeroes = marvelHeros.concat(dcHeros)
// console.log(allHeroes) /// now this will print all elements of both arrays as the element of allHeros.

// Another method is using spread operator




const allNewHeroes = [...marvelHeros, ...dcHeros]
console.log(allNewHeroes)


const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity) // returns all new array with all elements inside a single array.
console.log(realAnotherArray)

console.log(Array.isArray("Mahfuz"))// checks if the parameter is array or not.
console.log(Array.from("Mahfuz")) // converts the string or parameter into array, if the parameter is not convertable. then it will return an empty array. for example:

console.log(Array.from({name: "Mahfuz"})) // this will return an empty array, in this case we need ti specify which elements will be converted to array. Is it key or the value

// NOw creating an array from components

let v1 = 200;
let v2 = 300;
let v3 = 400;
let v4 = "Hello"

console.log(Array.of(v1, v2, v3, v4))  // The of() method insertts the parameters into an array. it returns a new array which includes the elemts of passed
