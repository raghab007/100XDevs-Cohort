// console.log("Hello world")
const fs  = require('fs');
const { get } = require('http');
const { inherits } = require('util');
// //const fs = import {  } from 'fs';
// const text = fs.readFileSync('some.txt','utf-8') // readig file synchronously
// // console.log(text)

// const fs = require('fs');

// const data = fs.readFile('some.txt','utf-8',(error,data)=>{
//     const someData =  new Promise((resolve, reject) => {
//         if(error){
//             reject();
//         }else{
//             resolve(data);
//         }
//     })
//     someData.then(data=>{
//         console.log(data)
//     })
// }
// )
// console.log(data)

// const data2 = fs.readFileSync('some.txt','utf-8')
// console.log(data2)

function syncSetTimeout(callbac,time){
    const currentTime = new Date();
    while(1){
        const newTime = new Date();
        if(newTime.getTime()-currentTime.getTime()>time){
            callbac();
            break;
        }
    }
}

syncSetTimeout(function(){
    console.log("Ten second finished")
},10000)



// Promisified version of fs
const readFileAsync = (file,encodetype)=>{
    return new Promise((resolve, reject) => {
        fs.readFile(file,encodetype,(error,data)=>{
            if(error){
                reject();
            }else{
                resolve(data)
            }
        })
    })
}

const dataFromFile = readFileAsync('some.txt','utf-8')
 async function getData() {
   const data = await dataFromFile;
   console.log(data)  
 }

 getData()

 // promisified version of fetch


