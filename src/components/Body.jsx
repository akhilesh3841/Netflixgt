import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
const Body = () => {
  return (
    <div>
       <BrowserRouter>
           <Navbar/>
           <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/browse" element={<Browse/>}/>
           </Routes>
       </BrowserRouter>
    </div>
  )
}

export default Body