// scopes local variab anglobal variable
function one(){
    let name = "shahzaib"
    function two(){
        let email = "user@gmail.com"
        console.log(name)
    }
    // two()

}
// console.log(email)
one()

// ````````````````````````complex function or function hosting```````````````

//here is no problem arise when we put/call the function before functon difining
console.log(addNo(5))
function addNo(num){
 return num +1;
}
// console.log(addNo(5))


//the problem arise when we put/call the function before functon difining
console.log(addNo2(6))
let addNo2 = function(num2){
    return num2 +1;
}
// console.log(addNo2(6))

//so we can use function hosting concept in this case


