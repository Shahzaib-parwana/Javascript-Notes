// FOR EACH FUNCTION(HIGHELY USED FUNCTION)
const myArr = ['shahzaib','aziz','sana','ali','asim']
// 1st method 
    // myArr.forEach(function (item){ // callback function
    //     console.log(item)
    // })

// 2nd method 
    // myArr.forEach((val) =>{
    //     console.log(val);
    // })

// 3rd method of function 
    // function printingFun(value){
    //     console.log(value);
    // }
    // myArr.forEach(printingFun)

//4th method
// forEach function can not only take 1 parameter it take 3 also to print its index no and full array
    // myArr.forEach((val,index,arr)=>{
    //     console.log(val,index,arr);
    //     console.log(`value:${val} :Index:${index} = fullarray: ${arr}`);
    // })
//5th most important (mining valies from objects which is inside array)

const myArray =[
    {
        name: 'shahzaib',
        email: 'user@mail.com'
    },
    {
        name: 'khan',
        email: 'user1@mail.com'
    },
    {
        name: 'ismil',
        email: 'user3@mail.com'
    }
]

myArray.forEach((item)=>{
    console.log(item.name,item.email);
})
