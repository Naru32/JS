//1st way: literal way

let arr = []
// adding array elements
arr[0] = 20
arr[1] = 30

console.log(arr);

// second way

let arr1 = new Array()

// adding array element
arr1.push(10)
arr1.push(44)
arr1.push(30)
arr1.push(34)
arr1.push(50)
arr1.push(60)

// pop - deletes from last

console.log('pop', arr.pop());
console.log(arr);

// add element from start - unshift()
arr1.unshift(5) 
console.log("unshift",arr1);

// remove from start - shift()

arr1.shift()
console.log("shift", arr1);

//slice - extracts array elements

console.log("slice",arr1.slice(1,4));

// splice - helps to add or remove elements from array

let arr3 = [1,3,5,2,56,7]

let del = arr3.splice(2,2,9,4,55)
console.log(arr3,"deleted",del);

// map - transforms the array elements
let age = [10,45,66,33,22]

let res = age.map((val,ind,arr)=>{
   return val + 2
})
console.log("mapped",res);

// filter - returns element which satisfies condition

let resF = age.filter((val)=>{
    return val % 2 != 0
})

console.log(resF);

// reduce - gives me accumulated value

let resR = age.reduce((acc,val)=>{
    return acc + val
},0)

console.log("sum of ages" , resR);
