// We will use reduce method here

// This is a very important method often used in shopping car price calculation

// This method receives two parameters, firs is accumulator which holds the added value, second is current ualue that indicates current index value of the array

// we also need to give an initial value to the method. it is done by adding a value or variable at the end of the callback function by separating it with a comma

const shoppingCart = [1, 2, 3, 4]
let initialValue = 0

let price = shoppingCart.reduce( function value(accumulator, currentvalue){
    return accumulator + currentvalue;
}, initialValue)

console.log(price);

// we can also do it usin arrow function. this will look more compact but does the same job

let newPrice = shoppingCart.reduce((acc, currval) => acc + currval, initialValue)
console.log(newPrice);

// both function does the same job
