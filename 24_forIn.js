const myObj = {
    'game1' : 'Football',
    'game2' : 'Soccer',
    'game3' : 'Cricket',
    'game4' : 'Golf'
}

// Basic for in loop structure

for (const key in myObj) {
   // console.log(key);
    
} // this block of code will return only the keys of the given object, not because the varable key we used but for its own nature. dont get confued by variable name


// To complete this jod we have to use different approach

for (const key in myObj) {
   // console.log(myObj[key]);
    
}   // Why this line returns value only? because the key variable returns the khey name and from the array syntax we know that we can use key name inside square brackets to call the object name. 
// The thinng that actually happens here is the key variable grabs the key name from the object and inside the square bracket it now holds the actual key name which is suntactically correct. Thats why this works and returns the value of the key.
// This is not a language specific syntax, it is just clever coding.




// Using for in loop in map

const map = new Map()

map.set('BD', 'Bangladesh')
map.set('SA', 'Saudi Arabia')
map.set('TUR', 'Turkiye') // ctrl + shift + alt + down arrow (2) to copy line below in linux vscode
map.set('EG', 'Egypt')
map.set('EG', 'Egypt')


// for (const key in map) {
//         console.log(key);
// }


// we can not iterate map like this. we can not use for in loop in map


// we will use for in loop for object and for of loop for array.