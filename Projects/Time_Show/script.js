let showTime = document.querySelector('#time')



setInterval(function(){
    let time = new Date() // declare this inside the set interval function because the variable must be set after every page refresh
    showTime.innerHTML = time.toLocaleString()
}, 1000) // Here the set interval refresh the page after every 1 seconds. The sequence of parameters must be the exact same. the second parameter shows the refreshing time in miliseconds
