//promises in js 
//ya forin excute nahi hoti ha balki queue ma lagti ha or bad ma excute hoti ha
//jasa hum kisi ko promice krta hain ki bad ma hum ya kam karinga 
const promiceOne = new Promise(function(resolve,reject){ //promice take one function .. and function take two argument                                                      
//do any async task
//DB call,cryptography,network
setTimeout(function(){
    // console.log('task is complete');
    resolve() //asla ma ya connect krta ha then or resolve ko
},1000)
})
promiceOne.then(function(){  // then()ka relation resolve k sath ha or ya callback function lata ha
    // console.log('consumed promise'); // ya us waqat complete ho ga jab app resolve sa is ko connect karing
    
}) 
// ``````````````````````````````second method`````````````````````````````

new Promise(function(resolve,reject){ 
    setTimeout(function(){
        // console.log('task 2 is complete ');
        resolve() 
    },1000)
}).then(function(){  
    // console.log('consumed promise 2(2)'); 
    
}) 


// ```````````````````````````3rd method`````````````````````````````
const promiceThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:'shsahzaib',email:'user@mail.com'})
    },1000)
})
promiceThree.then(function(user){
    // console.log(user.name);
})

// ``````````````````````4th promice(method)````````````````
//is method ma hum error based chack karing ki os hisab sa massage show karing
//i.e(database sa file lana ha ager file lana ma koi error aya to koi or message or error nahi aya to koi or message show karing


const promiceFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        if(!error){
            resolve({name:'shsahzaib parwan',email:'user@mail.com'})
        }
        else{
            reject('ERROR:Something went wrong.')
        }
    },1000)
})
promiceFour.then((user)=>{
    console.log(user);
    return user.name
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
  console.log(error);
}).finally(()=> console.log('Jawo yar ap ka kam nai hoga ajj kal awoo '))
//finall function excute hota he ager error b aya ho ya na aya ho tab b


// ``````````````````````fifth method```````````````````
//is method ma hum try and catch method sa kam krta hain
const promiceFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false;
        if(!error){
            resolve({name:'aziz ahmed',email:'useraziz@mail.com'})
        }
        else{
            reject('ERROR:Something went wrong in PROMICE.')
        }
    },1000)
})
async function consumerFunction(){
    try {
        const response = await promiceFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumerFunction()