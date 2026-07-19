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