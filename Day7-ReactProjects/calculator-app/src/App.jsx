
import './App.css'

function App() {

  let string = '';
  
 
  function getString(e){
    const value = e.target.value;
   string +=value;

  }

  function calculateResult(){
       const result = eval(string);
       console.log(result)
       string = '';
  }
  

  return (
    <>
    <div className='container'>
      <Number value={1} onClickHandler={getString}></Number>
      <Number value={2} onClickHandler={getString}></Number>
      <Number value={3} onClickHandler={getString}></Number>
    </div>
   <div className='container'>
      <Number value={4} onClickHandler={getString}></Number>
      <Number value={5} onClickHandler={getString}></Number>
      <Number value={6} onClickHandler={getString}></Number>
   </div>
    <div className='container'>
      <Number value={7} onClickHandler={getString}></Number>
      <Number value={8} onClickHandler={getString}></Number>
      <Number value={9} onClickHandler={getString}></Number>
    </div>
   
   <div className='container'>
   <Number value={'*'} onClickHandler={getString}></Number>
   <Number value={'+'} onClickHandler={getString}></Number>
   <Number value={'-'} onClickHandler={getString}></Number>
    <Number value='/' onClickHandler={getString}></Number>
    <Number value={'='} onClickHandler={calculateResult}></Number>
   </div>
  
    </>
  )
}

function Number(props){
  return <button value={props.value} onClick={props.onClickHandler}>{props.value}</button>
}

function DisplayResult(props){
  return <h1>{props.value}</h1>

}




export default App
