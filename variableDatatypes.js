// var a = 10
// a = 40 // reinitilization
// var a = 20 // redeclartion
// console.log(a);

// let b = 10;
// let b = 20 // redeclaration 
// console.log(b);

// b = 20; // reintialization


// scope: where can variables get accessed

// global scope

let a = 10;

function abc(){
    var c = 30
console.log(a);
console.log(c);
}

abc()

// console.log(c); // error 


{
    console.log("Blocked", a);
    
}

// block scope
for(let i=0;i<5;i++){
    console.log(a);
    console.log(i);
    
}

// console.log(i);

// primitive and non primitive

// primitive

// string
let str = "Narendra"
let str2 = 'Mahalle'

// number 

let num = 20;

// boolean

let bool = true || false

// null
const abs = null;

// undefined

// let val = undefined

console.log(val);
var val = 10;
console.log(val);

// console.log(abcd);

let abcd = 340

console.log(abcd);

// bigInt

let bignumber = 123980008888n
console.log(bignumber);

// NaN

console.log(0/0);

// non-primitive

// array 
let arr = [10,304,90,"qahjkhd"]

// object

let obj = {
name : 'Virat',
lname:'Kohli'
}

console.log(obj);
