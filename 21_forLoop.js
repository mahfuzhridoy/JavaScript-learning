// Today we will learn about for loop.

for (let i = 0; i < 10; i++) {
    const element = i;
   // console.log(element); 
    
} // this for loop will run 10 times and print from 0 to 9. because the condition we set will become true when the value of i is 9 and the loop will be exited

// the loops has three things, initialization, condition, and increment. this three things exist in all type of loops.

// nested loop


// a loop inside a loop is called a nested loop.

for (let i = 1; i <= 10; i++) {
    //console.log(`table of ${i}`)

   for (let j = 1; j <= 10; j++) {
    //console.log(`${i} * ${j} = ${i*j}`); // printion table from 1 to 10
    
    
   }
    
}


// Using or loop inside array

let myArr = ["hello", "I am", "Mahfuz"]

for (let index = 0; index < myArr.length; index++) { // we can not use <= condition here because index of array starts from 0.
//  console.log(myArr[index]);  // if we put <= the loop will be executed once extra time that will return a value for an index that does not exist, so it will print undefined. 
    
} // thats why we should never use <= condition.


// Using break and continue keyword. 

for (let index = 0; index <= 10; index++) {

    if (index == 5){
        console.log(`${index} is best number`);
        break; // once the condition is true, the loop executes the code inside if condition, then the break condition terminates the loop and does not iterate further. the loop permanently stops here.
    }
    console.log(`iterator value ${index}`) // this loop will stop once the index value is 5
    
}

// continue is a keyword that if executes, the loop will not execute the current iteration and jump to next iteration, then continue as usual. this just skips the current iteration in which the continue executes.

for (let index = 0; index <= 10; index++) {
    
    if (index == 5){
        console.log(`The continue will execute here at index value ${index}`);
        
        continue
    }

    console.log(`Index value ${index}`) // this loop will not prin idex value 5 because contiue will be executed at line 57.
    
} 

