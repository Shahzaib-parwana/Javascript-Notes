// ``````````````````````functions with objects and aray```````````````````````
function calculatePriceCart(val,...num1){ //(... )this is also called rest opretor used to solve the multple arguments problem
    return num1
}
// console.log(calculatePriceCart(200));
// console.log(calculatePriceCart(200,300,400));
// if we give one parameter on function and give many arguments js automatically pick one  pick frist argument as value and igninor other 

// ```````````````objects`````````````````
//we can access object like this but this is not a wright way
/*const myObj = {
    name:"shahzib",
    email:"parwan@mail.com",
    price:1000
}
function handleObject(myObj){
    console.log(myObj.name);
}
handleObject(myObj)*/

const myObj = {
    name:"shahzib",
    email:"parwan@mail.com",
    price:1000
}
function handleObject(anyobject){
    console.log(`User name is  ${anyobject.name} and email is :${anyobject.email}`);
}
handleObject(myObj)
//we can also declere object in function call like this
handleObject({
    name: "ali",
   email:95678
})

// ```````````````````````ARRAYS FUNCTIONS````````````
const array = [200,300,4000,500,600]
function accessArraayValue(myArray){
    return myArray[3]
}
console.log(accessArraayValue(array))
console.log(accessArraayValue([1,2,3,4,5,6]))