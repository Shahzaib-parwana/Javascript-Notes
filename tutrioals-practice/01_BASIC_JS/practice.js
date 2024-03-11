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
let num = 0
let result = myArr.reduce((acc,currVal)=>{
    return acc+currVal.price
} ,num)
console.log(result);