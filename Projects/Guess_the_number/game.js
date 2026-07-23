const randomNum = Math.round(Math.random() * 100 + 1)
console.log(randomNum)
//let input = document.querySelector('#number-input').value // This line will provide an empty value, because it immediately executes when the page loads. be careful next time
const submit = document.querySelector('#submit')
let display = document.querySelector('#display-message')
let inputArr = []
let remaining = 10


    submit.addEventListener('click', function(event){
    let value = document.querySelector('#number-input').value // The value is provided in string data type
    let input = parseInt(value)
    // console.log(typeof(input))
    if(input < 0 || input > 100){
        display.innerHTML = 'Please enter a valid number of range 1 to 100'
        return;
    }
    compare(input, randomNum)
})


// Compare Function. called inside submit event listener

function compare(input, random){

    if(input === randomNum){
        display.innerHTML = "Congratulations Found the number"
        reset();
    } 
    else if(input > randomNum){
        display.innerHTML = "The number is Too High"
    }
    else{
        display.innerHTML = "The number is Too Low"
    }

    loopRunner(remaining);
}

// Checks the condition until it becomes false

function loopRunner(remaining){
    //
    remaining = remaining -1;
}

function reset(){
    // Used to reset every variable

}