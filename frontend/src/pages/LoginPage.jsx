import React, { useState } from 'react'
import "../assets/CSS/loginPage.css"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const LoginPage = () => {
  const nav = useNavigate();
  const [email, setEmail] =  useState("");
  const [password, setPassword] =  useState("");


  const handleLoginForm = async(val)=>{
    val.preventDefault();

    try {
      const response = await axios.post('http://localhost:4545/user/login',
          {
              email,
              password
          }
        )
        console.log("this is the respone form the axios post", response);
        nav('/dashboard');
    } catch (error) {
      console.log("Some errr in axios post", error);
    }

  }
  return (
    <div className='container'>
      <h1>Welcome to the APP</h1>
      <form onSubmit={handleLoginForm}>
        <label htmlFor='email'>Email</label>
        <input
        type='email'
        id='email'
        name='email'
        value={email}
        onChange={(inputEmail)=>setEmail(inputEmail.target.value)}
        required></input>
        <label htmlFor='password'>Password</label>
        <input
        type='password'
        id='password'
        name='password'
        value={password}
        onChange={(inputPassword)=>setPassword(inputPassword.target.value)}
        required></input>
        <button type='submit' >Login Now</button>
      </form>
    </div>
  )
}

export default LoginPage
