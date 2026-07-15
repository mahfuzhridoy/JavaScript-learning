
// Here document represents the whole window

const title = document.getElementById('heading') // selecting an element by its ID. we can do the same by method getElementByClassName and use class attribute to access them. 
title.style.backgroundColor = 'green'

title.style.borderRadius = '5px'
title.style.padding = '4px'

document.getElementById('new-id').getAttribute('id')

//title.innerHTML = "<h1>Testing DOM</h1>" // selects the content as well as html tag elements too
title.textContent = "IDIOT" // This line of code will change the visible content only. suppose you set a span tag and inside attributes you have made it invisible, then this code will note be able to access it. But innerHTML will be able to do it easily.


// [Note: JS uses top down approach so if you override your previous code with another line of code below, previous code will be disabled automatically.]


document.querySelector('li').style.backgroundColor = '#5a3a3a' // this selector selects the first html tag only

// we can also select an element by class too with query selector

document.querySelector('#new-id').style.backgroundColor = 'purple' // css selectors also works when using query selector method.

// now query selector all method selects all the html element and returns a node list. this is not an array but have many similarities.

const listItem = document.querySelectorAll('.list')


document.getElementById('another-id').innerText