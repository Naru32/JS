// function is a set of statement, to perform operations

// named function

// this - it points to the current executor of function

// abc()

// function abc(){
//  // code 
//  console.log("this is a named function");
//  console.log("this binding", this)
// }

// Anonymous
// function (){
//  // anomymous
//  console.log('this is anonymous fn');
     
// }


// function with expression

// let print = function (){
//  // anomymous
//  console.log('this is function with expression');
// }

// print()

// arrow function

// let printArrow = ()=>{
//    console.log("Arrow function");   
//     console.log(this);  
// }

// printArrow()

// HOF
// 1st case accept fn as a parameter
// function HOF(cb){
//   console.log('Higher order example');
//   cb()
// }

// HOF(()=> console.log('this callback')
// )

function HOF(){
 // 2nd case :  return a function from a function
 return function (){
    let a = 10;
    let b = 20;
    
   return a + b
 }
}

let child = HOF()
console.log(child());

// console.log(HOF()()()); // currying

