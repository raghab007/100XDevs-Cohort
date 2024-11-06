
import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  let timer = useRef();
  function startClock(){
   const value = (setInterval(function(){
      setCount(count=>{
        return count+1;
      })
    },1000))
    timer.current = value;
  }

  function stopClock(){
   
    clearInterval(timer.current);
  }

  return (
    <>
      {count}
      <br />
      <button onClick={startClock}>Start Clock</button>
      <br />
      <button onClick={stopClock}>Stop Clock</button>
    </>
  )
}

export default App
