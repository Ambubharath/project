import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Password from './components/Password'
import {Routes,Route} from 'react-router-dom'
import View from './components/View'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<View/>}></Route>
      <Route path='/password' element={<Password/>}></Route>
      </Routes>
    
        
    </>
  )
}

export default App
