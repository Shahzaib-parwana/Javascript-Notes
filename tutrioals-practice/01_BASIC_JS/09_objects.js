// singleton

// object literals
const mysymbol= Symbol( 'key');
const JsUser = {  //object defining
    name:"shahzaib",
    "full name":"parwana", //if key declear like this we cannot access it by  dot operator
    age: 21,

    [mysymbol]:"my symbol",// we can declear symbol like this if we not declear like this it is treated as a string not a symbol.
    location:"kotli",
    email: "shahziab@google,com",
    isLogin:false,
    lastLoginDay: ["monday" , "tuesday"]
}
console.log(JsUser.age);
console.log(JsUser["name"]);
// console.log(JsUser[name]); // this can be not give correct value undefind
// console.log(JsUser.fullname)//error undefined
console.log(JsUser["full name"]);
//we can access symboll in diff way
// console.log(JsUser["mysymbol"]); //string type os not allowed
// console.log(typeof JsUser["mysymbol"]);
//correct way to access is
console.log(JsUser[mysymbol]);

JsUser.email = "khan@yohoo.com" //change the value like this
// console.log(JsUser)
// Object.freeze(JsUser) //after using freez we can not change the value further 
JsUser.email= "john@gmail.com"
// console.log(JsUser);

// functions used in objects
JsUser.greeting = function() {
    console.log("hello world of js");
}
JsUser.greetingtwo = function() {
    console.log(`hello world of js i am ${this.name}`);
}
console.log(JsUser.greeting); // it gives refrence of functios[Function (anonymous)]
console.log(JsUser.greeting()); // it excute the function
console.log(JsUser.greetingtwo()); // it excute the function

