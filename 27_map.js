// We will learn map methos here once again

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  let newNums = nums.map( (num) => num + 10 )

// console.log(newNums);


// we can use the same thing using for each loop


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let anotherNums = []

// nums.forEach( (number) => anotherNums.push(number + 10))

// console.log(anotherNums);


// Remember we can not directly log or print using for each loop. we have to create a new array and then push the values to that array to replace the map method



// Now we will learn about chaining

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.map( (num) => num * 10).map((num) => num + 1) // we can add filter method in this chaining too

const newNums = nums.map( (num) => num * 10).map((num) => num + 1).filter( (num) => num > 40)

console.log(newNums);





