//call method phala wala function ka refrence hold kr k rakhta ha or us ko call krwata ha
//Example
function setUsername(username){
    this.username = username
    console.log('called');
}
function createUser(username,email,password){
    setUsername.call(this,username)
    this.email= email;
    this.password = password;
}
const chai = new createUser('shahzaib','mail@,com',12345678)
console.log(chai);