// CLI todoAPP
const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');
let todoFile = 'raghab.json';

const readFilePromisified =  function(filename){
  return new Promise((resolve,reject)=>{
    fs.readFile(filename,'utf-8',function(err,data){
        if(err){
          reject('file not found');
        }else{
          resolve(data);
        }
    })
  })
}

// add todo
program
  .command('add')
  .description('Add todo into the json file')
  .argument('<data>','data to add into the file')
  .action(async (data)=>{
    let jsonData  =  await readFilePromisified(todoFile);
    jsonData = JSON.parse(jsonData);
    jsonData.push({name:data})
    const stringifiedJsonData = JSON.stringify(jsonData);
    fs.writeFile(todoFile,stringifiedJsonData,function(err){
      console.log(err&"Error");
    })  
  })


  // delete todo
program
  .command('delete')
  .description('Delete the todo from the json file')
  .argument('<todo>','todo to delete from the file')
  .action( async(todo)=>{
    let data = await readFilePromisified(todoFile);
    console.log(data)
    data = JSON.parse(data);
    console.log(data);
    data = data.filter(el=>{
      return el.name!=todo;
    })
    const stringifiedJsonData = JSON.stringify(data);
    fs.writeFile(todoFile,stringifiedJsonData,err=>{
      if(err){
        console.log(err)
      }else{
        console.log("Successfully deleted")
      }
    })

  })


program.parse();