//singleton objects
// const tenderapp =new Object() //sinlgeton object
const tenderapp = {} // object literals
tenderapp.id = "123ab"
tenderapp.name = "sahzaiab"
tenderapp.email = "sahzaiab@mail.com"
tenderapp.address = "kotli";
// console.log(tenderapp);

const user ={
    email: "user@gmail.com",
    regularuser1:{
        fulldetail:{
            fristname:"shahzaib",
            lastname:"parwana"
        }
    }
}
// console.log(user.regularuser1.fulldetail.fristname)

// object assigning (mearge two objects in one object)
let obj1 = {1:'a',2:'b',3:'c'}
let obj2 = {4:'d',5:'e',6:'f'}
let obj3 = {7:'g',8:'h',9:'i'}
// let obj = {obj1,obj2,obj3}
// console.log(obj)
// let obj = Object.assign({},obj1,obj2,obj3) // 1st metod
// let obj = Object.assign({},obj1,obj2,obj3) 
let obj = {...obj1, ...obj2,...obj3} //2nd method
// console.log(obj);

//```````````````if value is comming from database````````````````````
let object = [
    { id: 1243,
      name:"parwana",
      age:20
    },
    { id: 123,
      name:"khan",
      age:20
    },
    { id: 123,
      name:"khangee",
      age:20
    }
    
]
console.log(object[1])
console.log(object[2].name)

// ```````````````````````important methods```````````````````````
console.log(Object.keys(object[2])); //give all keys in array form
console.log(Object.values(object[2]));// give all values in  array form
console.log(Object.entries(object[2])); //give all values in entriees like key-value pair-, array
console.log(object[2].hasOwnProperty('20')); //to verify value exist in array  or object
console.log(obj2.hasOwnProperty('d'));
