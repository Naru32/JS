// for loop syntax
// for(initialization;cond;inc/dec){

// }

for(let i=0;i<10;i++){
console.log(i);
}

// while
let a = 5

while(a > 0){
console.log(a);
a--
}

// do-while

do{
    console.log('Do-while');    
}   
while(a > 0)

// for of - best for array

let arr = [10,30,50,60]

for(let ele of arr){
    console.log("For-of",ele);
}

// for-in

let obj = {
    name : 'Sachin',
    age : 23,
    isactive : true,
    city : 'Banglore'
}
for (const key in obj) {
    console.log(key);
}

for(let ind in arr){
    console.log(ind);
}