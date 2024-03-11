//classes
class user {
    constructor(name, age,email,password) {
    this.name = name
    this.age = age
    this.email= email
    this.password = password;
}
encryptPassword(){
    return `${this.password}abc`
}
changeUserName(){
    return `${this.name.toUpperCase()}`
}
}
const khan = new user('shahzaib',21,'shah@mail.com',3241)
console.log(khan.encryptPassword());
console.log(khan.changeUserName());

// ```````````````````INHERITANCE USING CLASS````````````````

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNMAE is ${this.username}`);
    }

}

class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}
const obj = new teacher("Mr Khan", "Khan@gmail.com","pass123");
obj.addCourse();
const obj2  = new User( "Mrs Smith")
obj.logMe();


// ```````````````````STATICS PROPERTIES```````````````````````
// static key word is used to not give access a functionality to every one
class User1{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNMAE is ${this.username}`);
    }
    static createID(){
        return `123`
    }
}
const shah = new User1('shahzaib')
console.log(shah.createID());

// ya is sa inherit classes pr b accessable nahi hota ha ku ki static propertyes use huinha