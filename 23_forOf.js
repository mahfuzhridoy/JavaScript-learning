// For of loop

// This is a special type of loop and array specific. 

let myArr = [1, 2, 3, 4, 5]

for (const variable of myArr) { // Here myArr is the array and variable is a dummy variable that contains the element of the array index

    // console.log(variable)

}

// We can use this loop for objects or strings too

const greetings = "Hello guys!"

for (const variable of greetings) {
    // console.log(variable);
    
}


// Now we will learn about map not so deeply

// map conatins key value pairs. this does not contain duplicate

const map = new Map()

map.set('BD', 'Bangladesh')
map.set('SA', 'Saudi Arabia')
map.set('TUR', 'Turkiye') // ctrl + shift + alt + down arrow (2) to copy line below in linux vscode
map.set('EG', 'Egypt')
map.set('EG', 'Egypt') // This line will not be included in the map because it does not store duplicate value. 


// console.log(map);


for (const key of map) { 
    // console.log(key)   // This line will print whole value in array format not only the key because we accessed the whole element in a sigle index with a single variable. and the single variable holds the whole value.
}


for (const [key, val] of map) { // now here the map object is de structured that why we can access them separately. Another example is added below
    // console.log(key, val)   
}


for (const [key] of map) { // Here we are accessing only the keys and we have de-structured the map object with square brackets
    // console.log(key)   
}


// NOw using for of in object

const myObj = {
    'game1' : 'Football',
    'game2' : 'Soccer',
    'game3' : 'Cricket',
    'game4' : 'Golf'
}

// This syntax will not work for iterating . This line will give an error


// Keep that in mind

// for (const element of myObj) { 
//     console.log(element);
    
// }




