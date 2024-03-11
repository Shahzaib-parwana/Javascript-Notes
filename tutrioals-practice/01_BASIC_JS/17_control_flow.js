//control flow means the order in which orders are excuted
//1.[if,else if,else]
//control flow operators [==,===,<,<=,>,>=,!=,&&,||,!==]


let val1 = true
let val2 = true
let val3 = false

if(val1 && val2){ //&& opretor is used if both are true then it will be excute
    console.log("statmwnt is true")
}else{
    console.log('statment is false');
}
if(val1 || val3){ // || opretor is used if one are true then it will be excute
    console.log("statmwnt is true on pipe")
}else{
    console.log('statment is false on pipe');
}
// `````````````switch statments```````````````
let month = "feb"
switch(month){
    case 'jan':
        console.log('month is jan');
        break;
    case 'feb':
        console.log('month is fab');
        break;
    case 'march':
        console.log('month is march');
        break;
    case 'april':
        console.log('month is aprial');
        break;
        default:
            console.log('invalid');
            break;
}

// `````````````````truthy and falsy values````````````````````

let email = " "
if(email){
    console.log("got the email");
}else{
    console.log("Not got the email");
}
//falsey values
//(false,0,-0,"",null,undefined,NaN,Bigint 0n)

// truthy values 
// ("0",'false'," ",[],{},function(){})

// ```````````````````checking if object and array is empty or not
let arr = []
if(arr.length===0){
    console.log("got the array is 0");
}
else{
    console.log("not emtp");
}
let obj={}
if(Object.keys(obj).length==0){
    console.log("obj is empty");
}else{console.log("obj is not wmpty");}

//``````````````Nulish Coalescing Opretor````````````````
//nulish ?? is usesd when we used when we wount to show our value if frist value is not come frome server 
//used to flage value
let myVal;
myVal = 5 ?? 10;
// myVal = null ?? 10;
// myVal = undefined ?? 10;
// myVal = undefined ??20 ?? 10;

console.log("nulish value is:",myVal);

// `````````````terniry opretor````````````````
//syntex:condation ? true :false
const iceTeaPrice = 100
iceTeaPrice<=80?console.log("less the 80"):console.log("greater then 80");