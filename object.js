// literal way
let obj = {
    name : 'Shivaraja',
    age : 24,
    role : 'Java fullstack dev',
    isActive : true
}

// keys() - array of keys available in the object
console.log(Object.keys(obj));

// values() - array of values
console.log(Object.values(obj));

// entries - array key + value
console.log(Object.entries(obj));

// accessing object properties 

// 1st way dot notation

console.log(obj.name);

// 2nd way bracket notation

console.log(obj['age']);

// freeze - freezes object cannot add, delete and modify the keys

Object.freeze(obj)

// delete
delete obj.age

// cant update
obj.age = 34

// console.log(obj);

// seal - cant delete and add but can modify 

// Object.seal(obj)
// // delete operation
// delete obj.age

// obj.age = 34
// console.log(obj);


