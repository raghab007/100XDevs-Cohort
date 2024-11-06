import { useState } from 'react'
import bulbOff from './assets/bulbOff.jpg'
import bulbOn from './assets/bulbOn.jpg'
import './App.css'

function App() {
 
  
  return (
    <>
     <LightBulb></LightBulb>
    </>
  )
}

function LightBulb(){
  const [bulbState,setBulbState] = useState(false); 
  return (
    <>
     <Bulb bulbState={bulbState}></Bulb>
      <br />
     <ToogleBulb setBulbState={setBulbState} bulbState={bulbState}></ToogleBulb>
    </>
  ) 
}

function Bulb({bulbState}){
  const imageProp = {height:'300px',weight:'300px'}
  return (
    bulbState?<img style={imageProp} src={bulbOn} alt="bulbOn" />:<img style={imageProp} src={bulbOff} alt='bulbOff'></img>
  )
}


function ToogleBulb({setBulbState,bulbState}){
  return <button style={{backgroundColor:'black',color:'white',height:'40px',width:'100px',borderRadius:'11px'}} onClick={()=>{setBulbState(prevValue=>!prevValue)}} >{bulbState?'OFF':'ON'}</button>
}

export default App
