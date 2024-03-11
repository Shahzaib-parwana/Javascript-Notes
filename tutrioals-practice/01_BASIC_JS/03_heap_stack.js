// stack memory(prmitive datatypes take heap memory) i.e

let name = "shahzaib parwana"

let changeName = name
// console.log(name);
changeName = "khan zada"
console.log(name, changeName);

// heap memory(non premitaive datatypes)

let ObjOne = {
    email:"abc@gmail.com",
    phone:3555269036,
}

let ObjTwo = ObjOne
ObjTwo.email = "shahzaib123.mail.com"
console.log(ObjOne);
console.log(ObjTwo);
