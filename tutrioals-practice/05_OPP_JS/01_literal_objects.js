const user = {
    name:'shahzaib',
    age:25,
    gender:'male',
    myFunction:function(){
        console.log(this.name); // it will print 'undefined' because of the context issue 
    }
}
user.myFunction();
// to solve this we can use call or apply methods
// console.log('---Call Method----');
// user.myFunction.call(user);