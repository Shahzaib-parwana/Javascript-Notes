// reduce function loop in js
let price1 = [1,2,3,4,5,6]

let myTotle = price1.reduce(function(acc,currentval){
    // console.log(`acclumeter:${acc} current:${currentval}`)
    return acc+currentval
},0)
// console.log(myTotle);
// ```````````````````````````````````
let myTotle2 = price1.reduce((acc,currentval)=> acc+currentval,0)
// console.log(myTotle2);

// `````````````````````````
let myArr = [
    {
        book:"english",
        price:3000
    },

    {
        book:"urdu",
        price:2000
    },

    {
        book:"science",
        price:1000
    },

    {
        book:"islamyat",
        price:500
    },

    {
        book:"history",
        price:1500
    }
]
let num = 0;
let myTotle3 = myArr.reduce((accumaloter,currentValue)=>{
    return accumaloter+currentValue.price;
},num)
console.log(myTotle3);