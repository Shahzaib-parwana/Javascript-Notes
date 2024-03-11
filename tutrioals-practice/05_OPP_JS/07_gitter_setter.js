//getter or setter ki help sa hum information ko incrypet kr sakta hain 
//jasa database ma value koi or ho or hum access krna wala ko koi or dakhana chata hon to is case ma hum use krta hain jitter or setter

class User {
    constructor(name, email,password) {
        this.name = name;
        this.email=email;
        this.password=password;
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;  //Encriptar la contraseña
    }
}
const password = new User('shahzaib','mail,com', '123456abcge');
console.log(password.password);//muestra MAIL,

// this is the frist metod and currentlyused method in above 
//but we can also used gitter and setter in fnction and objects for detail please search(or see chai and code [gitterand sitter vedio])