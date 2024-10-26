// const fs = require('fs')
// const  {Command} = require('commander');
// const { error } = require('console');
// const program = new Command();
// program.parse(process.argv);
// program.option('--filename').option('--something');   

// const filename = program.args[0];



// // Using  promisified readFile Function
// function readFileAsync(filename){
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename+'.txt','utf-8',function(error,data){
//             if(error){
//                 reject('file does not exits'+error)
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }

// if(filename){
//     readFileAsync(filename).then(data=>{
//         const datas = data.split(' ');
//         console.log(datas.length)
//     }).catch(error=>{
//         console.log(error)
//     })
// }

// // Using callback approach

// // if(filename){
// //     fs.readFile(filename+'.txt','utf-8',function(error,data){
        
// //         if(error){
// //             console.log(error+"file does not exists")
// //             return;
// //         }
// //         console.log(data)
// //         const datas = data.split(' ');
// //         console.log(datas.length)
        
// //     })
// // }

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split(' ').length;
        console.log(`There are ${lines} words in ${file}`);
      }
    });
  });

program.parse();