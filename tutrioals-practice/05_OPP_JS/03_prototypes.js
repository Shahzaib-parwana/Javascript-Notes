// ````````problem to solve```````````
// let myName = 'shahzaib'
// let myFullName = 'parwana'
//  console.log(myName.trueLength());

// ................................................

//hum object ma apna prototype b bana k inject kr sakta hain is example ma shah hum na apna prototype banya ha 
let myhero = ['thor','spiderman']
let heropower = {
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower:function(){
        console.log(`spider power is${this.spiderman}`);
    }
}
Object.prototype.shah = function(){
    console.log(`shahzaib is the best`);
}
// myhero.shah();
heropower.shah()
//isi trah hum array ma b apna prototype inject kr sakta hain lakin wo objects k lia accessable nahi hota ha
Array.prototype.khan = function(){
    console.log(`parwana is also best`);
}
myhero.khan()
// heropower.khan() //error because array is passed by object and object did not passed array
  
// ```````````````````inheritance````````````````````````
const user = {
    name:'shahzib'
}
const teacher = {
    makevedio:true
}
const teachersupport = {
    isAvilable:false
}
const teacherAssectant = {
    assignement:'js assignement',
    __proto__:teachersupport
    //1 object ko dosra sa link(inherit) krna k lia ya use krta hain (old version)
}
//baher b connect krsakta hain
teacher.__proto__ = user

// ````````````nwe apporach of inheritance```````````````
Object.setPrototypeOf(teacherAssectant,teacher) 


// frist given problem soloution

let anathorUser = 'khanzada      '
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`true length is: ${this.trim().length}`);
}
anathorUser.trueLength()
'ali    '.trueLength()
'shar'.trueLength()