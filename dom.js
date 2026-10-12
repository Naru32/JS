console.log("DOM");
// console.log(window);
// getElementByID
let ele = document.getElementById('title')
// console.log(ele);
// getElementByClass
let element = document.getElementsByClassName('text')
// console.log(element[0]);

// tagName
let elements = document.getElementsByTagName('p')
// console.log(elements);

for(let ele of elements){
    // console.log(ele);
}
//querySelector
let queried = document.querySelector('.text')
// console.log(queried);

// querySelectorAll

let queries = document.querySelectorAll('.text')
// console.log(queries);

// manipulation methods

let username = "Black devil"

// hello user 
// let element = document.getElementById('text')
// innerText
// element.innerText = `Hello user ${username}`

// textContent
element.textContent = `Hello user ${username}`

// change color

let f = document.getElementsByTagName('p')[2]
f.style.color = 'gold'
f.style.backgroundColor = 'black'
f.style.fontSize = '20px'

// addClass
console.log(element[0].classList.add('text2'));
