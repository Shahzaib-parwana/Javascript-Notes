let name = "shahzaib parwana"
let age = 21
let hegiht = 5.4
let isMarried = false

// console.log(`My name is ${name},my age is ${age} and my height is ${hegiht} and married ${isMarried}`)
 let newname = new String(name)
//  console.log(newname);
//  console.log(newname[0]);
//  console.log(newname.__proto__);

// ***************************strings methods***************************** 
let str = "shahzaib-parwana"
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase())
console.log(str.charAt(6))
console.log(str.indexOf("-"))
console.log("*******************************************");
let str2 = new String("shahzaib-khan-azda")
console.log(str2.substring(0,8)) //breacking parent string into given number
console.log(str2.slice(0,9))  // same work as substring but it take -ve number also
console.log(str2.slice(-2,-5))
console.log(str2.includes("shahzaib")) //to varifiy if the word is include on the string or not
console.log(str2.includes("shahzaip"))
console.log(str2.split("-")) // - is ki base pr string ko alag kra ga



let str3 = "     love you  ";
console.log(str3);
console.log(str3.trim())
console.log(str3.trimStart());
console.log(str3.trimEnd());
let url = "https://www.shahzaib/index/%20-love%20you"
console.log(url.replace('%20',''))
console.log(url.replaceAll('%20',''))




 
