// rest parameter

function abc(p1,p2,p3){
    console.log(p1,p2,p3);
}

// abc(10,20,40)

// arguments

function print(p1,p2){
// console.log(p1,p2);

for(let ele of arguments){
    console.log(ele);
}

}

// print(10,20,40,50,60)

// spread - operator

let obj = {
    name:'Narendra',
    age:24,
    // address:{
    //     city:'Surat',
    //     State:"GJ",
    //     pin:394210
    // }
}

let copy = {...obj}

// copy.age = 23
// obj.age = 24
// obj.address.city = "Ahemedabad"


    // x123 === x124
    console.log("original",obj);
    console.log("copy",copy);
    
    
console.log("top level",obj === copy);
// x123 === //x123
console.log("nested",obj.address === copy.address);

console.log('Original',obj);
console.log("copy",copy);

// template literal(``)

let age = 0

// console.log('My age is:',age);
console.log(`My age ${age} is:`);

// optinal chaining
console.log(obj.address);

// nullish coalscing - handles the null and undefined values

console.log(age < 25 ? 'true' : "false");

console.log(age ?? 10);

