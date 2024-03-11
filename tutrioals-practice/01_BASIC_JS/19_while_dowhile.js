//while loop and do while loop in js

// 1.while loop 
let index = 0;
while (index<=10) {
    // console.log(`Value is: ${index}`)
    index++;  // if we not give this condation then the loop will run infinitely
}

// while loops on array 
let myArr = ['shahzaib','aziz','sana','azhar']
let i=0;
while ( i<myArr.length) {
    // console.log(myArr[i]);
    i++;
}

// ````````````````do While loop```````````````````
/*in do whole loop 1 time excuation can be confirm done if condation are true or false  ,it run 1 time if 
condation is false ,other wise according to conditions b/c in do while frist excute the stutment and then 
check condition  */
let score = 21
do {
    console.log(`Your Score is: ${score}`);
    score++;
} while (score<=20);