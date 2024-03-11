//other high ittrateable loops in arrar,mapes
// [],[],[]
// {}{}{}
// 1.(for of) loop 
// ```````=> (for of) in array```
const arr =[10,20,30,40,50]
for (const num of arr) {
    // console.log(num)
}
// ```````=> (for of) in string```
const str = "hello shahzaib"
for (const num1 of str) {
    // console.log(num1);
    // console.log(str);// it will print according length of str
}
// ```````=> (for of) in maps````````
//a map is also a datatype work as a dictionary in python
const map  = new Map()
map.set(1,"shahzab");
map.set(2,"khan");
map.set(3,"aziz");
// console.log(map);

for (const [key, value] of map) { //we can implement loop in map like this
    // console.log(key,'=',value);
}
// ```````=> (for of) in Objects```````
// 2.for in loop 
//used for spacially objects but used in many datatypes when needed in cses
const myObj = {
    name:'shahzaib',
    email:'mail.com'
}
for (const key in myObj) {
    // console.log(key);
    // console.log(myObj);
    console.log(`${key} :${myObj[key]}`);

}