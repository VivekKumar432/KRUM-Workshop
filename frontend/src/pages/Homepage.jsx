import React from 'react'
import "../assets/CSS/homePage.css"
import { useNavigate } from 'react-router-dom'

const Homepage = () => {

    const nav = useNavigate();
    const handleLoginClick = ()=>{
        nav('/login')
    }
    const handleRegisterClick = ()=>{
        nav('/register')
    }
  return (
    <div>
      <h1 style={{textAlign:"center"}}>KRMU WORKSHOP</h1>
      <button onClick={handleLoginClick}>Proceed to Login</button>
      <button onClick={handleRegisterClick}>Proceed to Register</button>
    </div>
  )
}

export default Homepage
