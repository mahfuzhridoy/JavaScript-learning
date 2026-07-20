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