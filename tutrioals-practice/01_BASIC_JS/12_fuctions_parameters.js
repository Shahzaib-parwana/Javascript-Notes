//functions and parameters

function myFunction(num1,num2){
    // console.log(num1+num2)
    let result = num1+num2;
    return result;
    
}
myFunction//function refrence used in verious place and not a excute function
// myFunction(2,4)
// myFunction(2,"2")// js itself understand the frist element also  string.
// myFunction(true,false) //output is 1
// myFunction(null,undefined)
// myFunction(2,'hello')
let result = myFunction(2,3)
// console.log(result);

function anathorFunction(user1 = "shahzaib"){
    // if(user1===undefined){
    //     console.log("user is undefined");
    //     return
    // }
    if(!user1){
        console.log("user is undefined");
        return
    }
 return `${user1} is loged in`
}

// let fn1 = anathorFunction("shahzib")
let fn1 = anathorFunction()
console.log(fn1);
