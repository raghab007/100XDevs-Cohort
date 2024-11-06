
import './App.css'
import { BrowserRouter, Routes, Route ,Link, Outlet} from "react-router-dom";

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main></Main>}>
        <Route path='/ashwin' element={<Ashwin></Ashwin>}></Route>
        <Route path='/hello/abhyu' element={<Abhyu></Abhyu>}></Route>
        <Route path='/hello/abhi' element={<Abhi></Abhi>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

function Main(){
return (<>
  <h1>This is header</h1>
    <Link to='/'></Link>
    <Link to='/ashwin' >Ashwin</Link>
    <Link to='/abhyu' >Abyu</Link>
    <Link to='/abhi' >Abyu</Link>
  <Outlet></Outlet>
  <Outlet></Outlet>
  <h1>This is footer</h1>
  </>)
}

function Abhi(){
  return <h1 style={{padding:'10px'}}>Abhi</h1>
}


function Ashwin(){
  return <h1>Ashwin</h1>
}
  
function Abhyu(){
  return <h1>Abyu</h1>
}

export default App
