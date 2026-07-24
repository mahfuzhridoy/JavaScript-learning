const randomNum = Math.round(Math.random() * 100 + 1)
// console.log(randomNum)
// let value = document.querySelector('#number-input').value // This line will provide an empty value, because it immediately executes when the page loads. be careful next time
const submit = document.querySelector('#submit')
let display = document.querySelector('#display-message')
let inputArr = []
let remaining = 10
// let play = true

    submit.addEventListener('click', function(event){
     console.log("Button clicked");
    // event.preventDefault()
    let value = document.querySelector('#number-input').value // The value is provided in string data type
    let input = parseInt(value)
    // console.log(typeof(input))
    if(input < 1 || input > 100){
        display.innerHTML = 'Please enter a valid number of range 1 to 100'
        return;
    }
    compare(input)

   
});

 


let guessArr = document.getElementById('guesses')
// guessArr.innerHTML = `${inputArr}`

// document.getElementById('remaining').innerHTML = `${remaining}`

// Compare Function. called inside submit event listener

function compare(input){

    remaining --;
    if(input === randomNum){
        display.innerHTML = "Congratulations Found the number"
    } 

    if (remaining === 0){
        display.innerHTML = `Game Over! The number was ${randomNum}`
        document.querySelector('#number-input').setAttribute('disabled', 'true')
        submit.disabled = true
        return; // Very Important. If you dont return then the game over will be immediately overwritten
    }
    document.getElementById('remaining').innerHTML = `${remaining}`

    if(input > randomNum){
        display.innerHTML = "The number is Too High"
        inputArr.push(input)
    }
    else if(input < randomNum){
        display.innerHTML = "The number is Too Low"
        inputArr.push(input)
    }

   guessArr.innerHTML = `${inputArr}`

    // loopRunner(remaining);
}

// Checks the condition until it becomes false

// function loopRunner(remaining){
//     //
//     // remaining--;
//     // if(remaining === 0){
//     //     play = false
//     //     display.innerHTML = "Game Over"
//     // }
// }


// restart button

let restart = document.querySelector('#restart')
restart.addEventListener('click', function(event){
    reset();
})


// Quit button

let quit = document.querySelector('#quit')
quit.addEventListener('click', function (event) {
    window.location = './index.html'
})


// reset function

function reset(){
    // Used to reset every variable
    inputArr = []
    remaining = 10

    document.querySelector('#number-input').removeAttribute('disabled', 'true')
    submit.removeAttribute('disabled', 'true')

    location.reload()

}