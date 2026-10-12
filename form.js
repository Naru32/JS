// console.log('conncted');

let form = document.getElementById('userdata')
let ui = document.getElementById('result')

let payload = {
    Fname:'',
    email:''
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let name = document.getElementById('Fname').value
    let email = document.getElementById('email').value

ui.textContent = `Welcome ${name} and hii ${email}`
})
