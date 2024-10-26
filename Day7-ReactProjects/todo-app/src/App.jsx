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


function Button(props){
  return <button id={props.id} onClick={props.onClickHandler} className={props.class&&props.class}>{props.value}</button>
}

function Todo(props) {
  return (
    <div>
      {
        props.value.map((el, index) =>
          <div  key={index}><p style={{display:'inline-block',marginRight:'10px',fontWeight:'bold'}}>{index+1 }.{el}</p><Button onClickHandler={props.deleteHandler} id={'todo-'+index} value={'Delete'}/><Button onClickHandler={props.updateHandler} value={'Update'} class={index}/></div>
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
