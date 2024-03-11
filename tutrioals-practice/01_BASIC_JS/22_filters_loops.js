//the forEach loop cannot return any value so we cannot implemnts conditions on it
// So we can use the filter loop which can return values so we can write conditional codes to check specific values on it i.e
const arr = [1,2,3,4,5,6,7,8,9,10]

// let bigNo = arr.filter((item)=>item > 5)
// console.log(bigNo);


let num = arr.filter((item)=>{
    return item>3;
})
// console.log(num);

let books =[
    {
        name:"urdu",
        price:900,
        publish:1990,
        edition:1999

    },
    {
        name:"english",
        price:1000,
        publish:1980,
        edition:1989

    },
    {
        name:"history",
        price:1200,
        publish:2000,
        edition:2004

    }
]
let bookuser = books.filter((item)=>item.name==='english')
console.log(bookuser);

//more practice on this by book examples