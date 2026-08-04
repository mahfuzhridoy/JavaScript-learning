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