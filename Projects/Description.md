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