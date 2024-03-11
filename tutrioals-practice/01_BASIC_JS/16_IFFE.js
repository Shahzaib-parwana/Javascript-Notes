
// ````````````````Imeditaly Invok function(IFFE)``````````````````````
/*we use ifee method to imeditaltly call the function  and when we write large number of  code  globel variable 
pollution occure to avoid this pollution we use iffe function i.e */

// 1.named IFFE if function contain any name
let myfun1 = function(){
    console.log("hello shhazaib parwana how are you");
}();      //1st method of calling of IFFE when we use variable stored function

(function fun2(){
    console.log(`"khan shab zindabad"`);
})(); //2nd method of calling IFFE function
 
//unnamed iffe
(()=>{
    console.log("i am a good boy");
})();
((name)=>{
    console.log(`"i am a good boy"${name}`);
})('shahzaib');

