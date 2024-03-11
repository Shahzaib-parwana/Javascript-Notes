let hollywood_heros = ["thor","ironman", "captainamiraca","hulk"];
let bollywood_heros = ["salman", "aksha", "ratiq","ajay"];

// let  heroes = hollywood_heros.push(bollywood_heros);
// console.log(heroes);
// console.log(hollywood_heros[4][2]);

let heros2 = hollywood_heros.concat(bollywood_heros);
// console.log(heros2);
let all_heros = [...hollywood_heros,...bollywood_heros];
// console.log("All Heroes: ",all_heros)

let new_array = [1,2,3,[4,5,6,[6,8,9]]];
// let new_array2 = new_array.flat(Infinity);

// console.log(new_array.flat(Infinity));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let arr = "shazaib parwana"
console.log(Array.isArray(arr)); //(isArray) is to find if the given arr is array or not
let convert_to_array = Array.from(arr) //(from) is used to convert datatypes into array
// console.log(convert_to_array);
console.log(Array.from({name: 'shahzib'})); //(from not convert directly object(huma batana padhta ha ki 'key' ya 'values 'ka pair bana ha))

let str1 = "hello"
let  str2 = "world"
let str3 = "!"

let anathor_convert_method = Array.of(str1,str2,str3)//(of)is used to convert all datatypes into array collectively
console.log(anathor_convert_method);



