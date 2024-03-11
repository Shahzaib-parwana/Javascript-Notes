//for loop or itreatation 
// for (let i = 0; i <=10; i++) {
//     const element = i;
//     if (element==5){
//         console.log('5 is mu favrioute number');
//     }
//     console.log("the value of i is:",element)
    
// }
// ``````````````````````````````````````````````````````

// for(let num = 1; num<=10; num++){
//     console.log(`Outer loop: ${num}`);
//     for(let num2 = 1;num2<=10; num2++){
//         console.log(`inner loop: ${num2} and outer loop ${num}`);

//     }
// }
// ```````````````````````````````````tablel print````````````````````
for(let num = 1; num<=10; num++){
    // console.log(`The Table of: ${num}`);
    for(let num2 = 1;num2<=10; num2++){
        // console.log(`${num} * ${num2} = ${num*num2}`);

    }
}

// `````````````````loop in array```````````````````````````

let myArr = ['shahzaib','aziz','sana','azhar'];
for(let valArr = 0; valArr < myArr.length; valArr++){
    let element = myArr[valArr]
    // console.log(element); 
}

// ``````````````````terminate of the ioop according to condition``````````

// for (let index = 1; index < 20; index++) {
//     if (index==9){
//         console.log('instrection followed ',index);
//         break
//     }
//     console.log(`Value of index: ${index}`);
    
// }
for (let index = 1; index < 20; index++) {
    if (index==9){
        console.log('instrection followed ',index);
        continue
    }
    console.log(`Value of index: ${index}`);
    
}