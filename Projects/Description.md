# Mini projects 

## Project 1

First project is a color change event. When a user clicks on a box with a certain color, The color of body will change. The basic idea is, select the body, select the buttons, set an event listener. Then based on the button ID, change the color of body.

### Solution code
```javascript

const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
    //    console.log(event.target.id)
        let color = event.target.id
        if (event.target.id === color) {    
        body.style.backgroundColor = color;
        }
       
    })
});

```


## Project 2

The second project is a BMI calculator. The basic idea is take height, take weight from the form input button, then show the results while submit button is clicked.

### Solution code
```javascript
const form = document.querySelector('form')
 // const height = parseInt(document.querySelector('#height').value) // this block of code here will give an empty value. because we are taing the value before the form submit button is clicked

form.addEventListener('submit', function(event){
    event.preventDefault() // prevents form from submitting its value to the server by default

    const height = parseInt(document.querySelector('#height').value) // we are writing the input code because we want the value when the submit button is clicke. If we had set it to starting, we would get empty values
    const weight = parseInt(document.querySelector('#weight').value) // same reason here.

    const result = document.querySelector('#result')
    const result2 = document.querySelector('#result2')
    
    if (height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please give a valid height'
    }

    else if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please give a valid weight'
    }

    else{
        let value = (weight / (height/100) ** 2).toFixed(2)
        result.innerHTML = `Your BMI is: ${value}`

        if(value < 18.6){
            result2.innerHTML = 'You are Underweight'
        }
        else if(value >= 18.6 && value <= 24.9){
            result2.innerHTML = 'You have normal BMI'
        }
        if(value > 24.9){
            result2.innerHTML = 'You are overweight'
        }
    }
})

```


## Project 3
hird project is very simple project. It only shows the local time onto the browser.

### Solution code

```javascript
let showTime = document.querySelector('#time')



setInterval(function(){
    let time = new Date() // declare this inside the set interval function because the variable must be set after every page refresh
    showTime.innerHTML = time.toLocaleString()
}, 1000) // Here the set interval refresh the page after every 1 seconds. The sequence of parameters must be the exact same. the second parameter shows the refreshing time in miliseconds


```

## Project 4
This project is a mini game GUESS THE NUMBER!

### Solution code

```javascript

const randomNum = Math.round(Math.random() * 100 + 1)
// let value = document.querySelector('#number-input').value // This line will provide an empty value, because it immediately executes when the page loads. be careful next time
const submit = document.querySelector('#submit')
let display = document.querySelector('#display-message')
let inputArr = []
let remaining = 10
let play = true

if(play){

    submit.addEventListener('click', function(event){
    let value = document.querySelector('#number-input').value // The value is provided in string data type
    let input = parseInt(value)
    if(input < 1 || input > 100){
        display.innerHTML = 'Please enter a valid number of range 1 to 100'
        return;
    }
    compare(input)
   
});

}

let guessArr = document.getElementById('guesses')

// Compare Function. called inside submit event listener

function compare(input){

    remaining --;
    if(input === randomNum){
        display.innerHTML = "Congratulations! Found the number"

        document.querySelector('#number-input').setAttribute('disabled', 'true')
        submit.disabled = true

        play = false
        return;
    } 

    if (remaining < 0){
        display.innerHTML = `Game Over! The number was ${randomNum}`
        document.querySelector('#number-input').setAttribute('disabled', 'true')
        submit.disabled = true
        play = false
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

   guessArr.innerHTML = `${inputArr}, `
}

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
    play = true

}

```


## Project 5
If start button is pressed, The background color keeps changing

### Solution code
```javascript
function color(){
    let hex = '0123456789abcdef'
    let col = '#'
    for (let index = 0; index < 6; index++) {
        col += hex[Math.floor(Math.random()* 16) ]
        
    }
    console.log(col);
    

    return col;
}

let intervalId

function startChangingColor(){

    intervalId = setInterval(colorChanger, 1000)
    
    function colorChanger(){
        document.querySelector('#body').style.backgroundColor = color()
    }
    
}

function stopChangingColor(){
    clearInterval(intervalId)
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
```


## Project 6
A key logger. if a key is pressed, it is shown at the screen

### Solution code
```javascript
const insert = document.querySelector('.insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
<table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " "? "Space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    `
})
```