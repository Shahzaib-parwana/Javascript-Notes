//map function
//in map function it not dependent on condation(true,false) it execute
////but in filter condition checked and then according to condation statement excute but not in map 
let myArr = [1,2,3,4,5,6,7,8,9]
const newArray = myArr.map((num)=>{return num+10})
// console.log(newArray);

// 1.chaning ````````````````````````
// we can use multple function in map and also filter function(ak sayth laga sakta hain)
let chaningFun = myArr.map((item)=>item*10)
                 .map((item)=>item +1)
                 .filter((item)=>item >=30)
// console.log(chaningFun); 

//further practice in strings and other datatypes