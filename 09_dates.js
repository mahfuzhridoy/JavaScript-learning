// let myDate = new Date() // This is basic usage of usind date object
// console.log(myDate);


// console.log(myDate.toString());  //  output: Sat Jun 20 2026 11:13:26 GMT+0600 (Bangladesh Standard Time). converts to strion
// console.log(myDate.toDateString()); // output: Sat Jun 20 2026 . 
// console.log(myDate.toLocaleString()); // output: 6/20/2026, 11:13:26 AM . 

// // console.log(typeof(myDate)) 

let myCreateDate = new Date(2023, 0, 23);
console.log(myCreateDate.toDateString()) // output: Mon Jan 23 2023

console.log(myCreateDate.toLocaleDateString()); // output: 1/23/2023

let myTimeStamp = Date.now()
console.log(myTimeStamp); // output: 1781932544036   . Provides unix timestamp in milliseconds from january 1, 1970.

console.log(myCreateDate.getTime()) // output: 1674410400000  . converts a date to timestamp.

console.log(Math.floor(Date.now()/1000)) // output: 1781932544  . getting time in seconds.

let newDate = new Date()

console.log(newDate.getMonth() + 1); // output: 6 . gives output the month. 1 is added because the month index starts from 0.


newDate.toLocaleDateString('default', {
    weekday: "long"
    
}) // Customizing the date according to need.

console.log(newDate) 