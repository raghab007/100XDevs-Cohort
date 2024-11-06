import React, { useState } from 'react'
import './App.css'

function App() {
  let [todos,setTodos] = useState([])
  function addTodo(){
   const todo  = document.querySelector('#input').value;
    const newTodo = todos.concat([todo]);
    setTodos(newTodo);
  }

  function updateTodo(e){
    const elClass = e.target.getAttribute('class');
    const index = parseInt(elClass.split('-')[1]);
    
    console.log(document.querySelector('#input').value)
    console.log(todos)
   todos[index] = document.querySelector('#input').value;
    const newTodo = [...todos]
    setTodos(newTodo);

  }

  function deleteTodo(e){ 
    const id = e.target.id;
    const todoNumber = parseInt(id.split('-')[1]);
    todos = todos.filter((el,index)=>{
      return index!=todoNumber;
    }) 
    setTodos(todos)
  }
  
 return (

    <>
    <Input onClickHandler={addTodo}></Input>{
    <Todo value ={todos} deleteHandler={deleteTodo} updateHandler={updateTodo}></Todo>   

  }
    </>
  )
  
}
// Button component
function Button(props){
  return <button id={props.id} onClick={props.onClickHandler} className={props.class&&props.class}>{props.value}</button>
}

// Todo component 
function Todo(props) {
  return (
    <div>
      {
        props.value.map((el, index) =>
          <div  key={index}><p style={{display:'inline-block',marginRight:'10px',fontWeight:'bold'}}>{index+1 }.{el}</p><Button onClickHandler={props.deleteHandler} id={'todo-'+index} value={'Delete'}/><Button onClickHandler={props.updateHandler} value={'Update'} class={'todo-'+index}/></div>
        )
      }
    </div>
  );
}

function Input(props){
 return (
  <>
  <input type="text"  id='input'/>
  <Button onClickHandler={props.onClickHandler} value={"Add todo"} ></Button>
  </>
 ) 
}

export default App
