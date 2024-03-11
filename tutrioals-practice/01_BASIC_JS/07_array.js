// Ponints to be noted 
// 1. array copy operations are can be shallow (refrencive) heap memory (change in orignal)
// 2. deep opreation (stack memory ) make copy and change on that


let array = [1,2,3,4,5]

let newArray = new Array("shahzib","parwan","khan")
// console.log(newArray[1]);
// console.log(array[3]);

// 3333333333333333333333333333333[ ARRAY OBJECTS ]333333333333333333333333333333

let myArr = [5,10,20,30,40,50]
let myArr2 = ["hello","how","are","you","bro"]
myArr.push(60)
myArr2.push("....")
// console.log(myArr);
// console.log(myArr2);

myArr.pop()
myArr2.pop()
// console.log(myArr)
// console.log(myArr2)

myArr.unshift(60) //this will add 60 in starting of array
myArr.shift(60) // this will remove  60 from array like it work as push or pop function
// console.log(myArr);


let myArr3 = myArr.join(); //convert type of array in to string
// console.log(typeof myArr);
// console.log(typeof myArr3);
/*
array contain following methods(includes,indexOf and many other which are used in string)
*/
//slice and splice

let newarr = [1,2,3,4,5]
console.log(`A: ${newarr}`);
let newarr2 = newarr.slice(1,3) //contain number b/w index no 1,3
console.log(newarr2);
console.log(newarr);
console.log("`````````````````````splice`````````````````````````");
console.log(`B: ${newarr}`); // this is the orignal array before splice
let newarr3 = newarr.splice(2,4) //contain all number including 2,3 numbers
console.log("c: ",newarr3); // this is the new arry after splice it totely change the orignal array according to the given numbers
