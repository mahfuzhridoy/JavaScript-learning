// De structuring an object

const course = {
    coursename : "Learning JS",
    price : "Free",
    courseInstractor : "Self",
}


// Accessing the properties using destructure

const {courseInstractor} = course // we have broken the object so the properties of the object can be accessed directly from outside without calling the name of the object like course.courseInstructor. Insted, we can directly use the courseInstractor key.

console.log(courseInstractor)

// we can furthermore simplify the key name of the object by giving it new name. for example

const {coursename: subject} = course

console.log(subject)

// Or maybe we can try something else. lets find out

// const test = course.price

// console.log(price)

// NOpe. we can not do it like this



//++++++++++++++++++++++++++++++++++++++++++++++++++ API ++++++++++++++++++++++++++++++++++++++++++++++++++++


// Api is formatted on JSON structure. it takes some services from third party or other domain and gives the result to the domain we requested from. it uses fetch method to connect them

// JSON format

// {
//     "name" : "Mahfuz",
//     "course" : "cyber security",
//     "Time" : "400 H"
// }

// This is the JSON formatting

// However api sometimes returns an array of object. NOt always the json format object

/* 

    [
        {},
        {},
        {}
    ]

*/