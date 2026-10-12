// event : action occured in browser window

// let ele = document.getElementById('LI1')
// consume event by addEventListener
// ele.addEventListener('mouseover',(e)=>{
// ele.style.backgroundColor = 'red'
// ele.style.color = 'white'
// ele.style.fontSize = '20px'
// })

// event propogation

// let GP = document.getElementById('GP')
// let parent = document.getElementById('Parent')
// let child = document.getElementById('Child')

// GP.addEventListener('click',(e)=>{
//     console.log('GP clicked')    
// },true)

// parent.addEventListener('click',(e)=>{
//     console.log('Parent clicked');
// },true)  

// child.addEventListener('click',(e)=>{
//     console.log('Child clicked');
// },true)

let ul = document.getElementById('list')

ul.addEventListener('click',(e)=>{
    console.log(`${e.target.textContent} clicked`);
})