//ARROW FUNCTIONS AND( THIS)  KEY WORDS
const object = {
    name:"shahzaib",
    price:999,
    wellcomeMessage: function(){
        console.log(`Wellcome ${this.name} in website`)
        console.log(this);
    }
    
}
// object.wellcomeMessage()
// object.name = "Ali"
// object.wellcomeMessage()
// console.log(this); //(this) keyword is used to access objects and current scope values

//``````````now we check the this keyword is work in functions to access values
 function chai(){
    let name = "shahzaib"
    console.log(this.name)
 }
//  chai() // so this is not workeable in functions to access values

 const person = ()=>{
    let username = "shahzaib"
    console.log(this);
 }
 person();
 const person1 = ( num1,num2)=>{
    let username = "shahzaib"
    
    return num1+num2;
 }
console.log( person1(2,3));

//implicit run one line function(lambda function)

const person2 = ( num3,num4)=> (num3-num4);
console.log( person1(10,5));