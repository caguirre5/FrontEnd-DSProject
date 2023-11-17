import Navbar from './components/Navbar';
import './App.css'
import { red, green, blue } from '@mui/material/colors';
import {Route, Routes} from 'react-router-dom'
import Landing from './components/Landing';
import Stats from './components/Stats';


function App() {
  

  return (
    <div className='app-container'>
      <Navbar></Navbar>
      <div className='container'>
        <Routes>
          <Route path='/FrontEnd-DSProject/' element ={<Landing/>}/>
          <Route path='/FrontEnd-DSProject/Stats/' element ={<Stats/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
