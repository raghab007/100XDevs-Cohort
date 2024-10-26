import { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    green: 0,
    red: 0,
    yellow: 0,
    blue: 0
  });
  
  console.log('rerendered')

  // Change color count based on button click
  function changeColor(e) {
    const {id}  = e.target;

    setValues((prevValue) => {
      if (id === 'green') {
        return { ...prevValue, green: prevValue.green + 1 };
      } else if (id === 'red') {
        return { ...prevValue, red: prevValue.red + 1 };
      } else if (id === 'yellow') {
        return { ...prevValue, yellow: prevValue.yellow + 1 };
      } else if (id === 'blue') {
        return { ...prevValue, blue: prevValue.blue + 1 };
      }
    });
  }
  console.log(values)

  const colors = {
    green: 'green',
    red: 'red',
    yellow: 'yellow',
    blue: 'blue'
  };

  return (
    <>
    <Button id={colors.green} onClickHandler={changeColor} color={{backgroundColor:colors.green}} button={'Green'} value={values.green}/>
    <br />
    <br />
    <Button id={colors.red} onClickHandler={changeColor} color={{backgroundColor:colors.red}} button={'Red'} value={values.red}></Button> 
    <br />
    <br />
    <Button id={colors.yellow} onClickHandler={changeColor} color={{backgroundColor:colors.yellow}} button={'Yellow'} value={values.yellow}></Button>
    <br />
    <br />
    <Button id={colors.blue} onClickHandler={changeColor} color={{backgroundColor:colors.blue}} button={'Blue'} value={values.blue}></Button>
    <br />

    </>
  );
}


function Button(props){
  return <button id={props.id} onClick={props.onClickHandler} style={props.color}>{props.button}{props.value}</button>
}

export default App;
