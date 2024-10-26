const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const { promiseHooks } = require('v8');
// function printSomething() {
//   console.log("You are doing great raghab");
// }

// // Normal settime out
// setTimeout(printSomething, 2000);

// const promisifiedSetTimeOut = function (time) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   });
// };

// promisifiedSetTimeOut(10000).then(printSomething);

// function saySomething(time, messsage, callbac) {
//   setTimeout(function () {
//     console.log(messsage);
//     if(callbac){
//     callbac();
//     }
//   }, time);
// }

// saySomething(1000, " Hello raghab",function () {
//   saySomething(2000, "Hello nirajan", function () {
//     saySomething(3000, "Hello niroj",function(){
//         saySomething(300,"Hello baba momy")
//     });
//   });
// });




// function saySomethingPromisified(time){
//     return new Promise((resolve)=>{         
//         setTimeout(function(){
//             resolve()
//         },time)
//      })
//  }


// saySomethingPromisified(2000).then(()=>{
//     console.log("Hello raghab")
//   return  saySomethingPromisified(10000)
// }).then(()=>{
//     console.log("Hello nirajan")
// })




// const someFunction = function(resolve){
//     resolve("Hello raghab");
// }
// const promise = new Promise(someFunction);
// console.log(promise)



// Promisified Read file
// const promisifiedReadFile = function(filename){
//       return  new Promise((resolve, reject) => {
//             fs.readFile(filename,'utf-8',function(error,data){
//                 if(error){
//                     reject('invalid filename');
//                 }else{
//                     resolve(data)
//                 }
//             })
//         })
// }

// promisifiedReadFile('some1.txt').then(data=>{
//     console.log(data)
// }).catch((error=>{
//     console.log(error)
// }))





function promisifiedWriteFile(filename,string){
   return new Promise((resolve,reject)=>{
        fs.writeFile(filename,message,function(error,data){
            if(error){
               reject();
            }else{
                resolve(data)
            }
        });
    })
}


promisifiedWriteFile('new.txt',"How are you nirajan ?").then(data=>{
    console.log(data);
})




