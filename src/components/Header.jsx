import React from 'react'
import logo from "../assets/logo.png"
const Header = () => {
  return (
     <div className=' m-auto absolute px-8 bg-gradient-to-b z-20 from-black'>
     <img className=' w-[140px] h-[75-px] px-3.5 ' src={logo}></img>
     </div>
  )
}

export default Header