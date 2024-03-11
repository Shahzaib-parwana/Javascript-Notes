let score = 500
console.log(score);

let num = new Number(100)
console.log(num);
console.log(num.toString().length); //tostring is used to convert into string
console.log(num.toFixed(2)); //fixed in two dicmial value


const num2 = 1234.8944
console.log(num2.toPrecision(5)); //toPrecision is used to round up the number 1,2,3 onthis point it give expontial value  above of them it give dicimal roundup value

let num3 = 1000000000;
console.log(num3.toLocaleString("en-PK"));

console.log("**************************Mtah**************************");

console.log(Math)
console.log(Math.abs(-50)) //convert negative into possitive value
console.log(Math.round(77.77))  //roundup the number
console.log(Math.ceil(77.17))   //roundup if  if value is gratter then .1
console.log(Math.floor(77.97))
console.log(Math.min(77.97,77.45,45.456,77.99,77.89));
console.log(Math.max(77.97,77.45,45.456,77.99,77.89));

console.log(Math.random())
console.log((Math.random()*10)+1) // by multplying 10 and adding 1 will give random number b/w 1,10
console.log(Math.floor(Math.random()*10)+1)

let min = 20
let max = 40
console.log(Math.floor(Math.random()*(max-min +1))+min); //it give random number b/w 20,40



