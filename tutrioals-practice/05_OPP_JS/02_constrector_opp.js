// constrecter function
//new keyword is used to for new instance and known as a conctructer
function User(name,age){
    this.name=name;
    this.age = age;
    this.fun = function () {
        console.log(`Wellcome ${this.name}`);
    }
    return this //koi faraq nai padtha ha it is default
}
//is situation ma constructer hum na use nahi kya ha jis ki waaja sa value override ho rahe ha
//iss ko solve krna k lia hum constrector use krta hai ja huma naya instance data ha (nai copy) jis sa over ride nai hota ha

// const userOne = User('John',25);
// const userTow = User('John bai',250);
// console.log(userOne)

const userOne =new User('John',25);
const userTow = new User('John bai',250);
console.log(userOne)