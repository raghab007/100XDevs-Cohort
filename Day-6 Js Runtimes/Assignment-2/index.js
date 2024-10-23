const fs = require('fs');

let something;
function main(){
    fs.readFile('raghab.json','utf-8',function(err,data){
      console.log(data) ; 
      const jsonData = JSON.parse(data)
      jsonData.todos.push({todo2:'sleep'})
      console.log(JSON.stringify(jsonData))
    
    })

}

main()