import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const RegisterPage = () => {
    const nav = useNavigate();
    const [name, setName] =  useState("");
    const [username, setUsername] =  useState("");
    const [email, setEmail] =  useState("");
    const [password, setPassword] =  useState("");
  
  
    const handleRegisterForm = async(val)=>{
      val.preventDefault();

      try {
        const response = await axios.post('http://localhost:4545/user/create-user',
            {
                name,
                username, 
                email,
                password
            }
          )
          console.log("this is the respone form the axios post", response);
          nav('/login');
      } catch (error) {
        console.log("Some errr in axios post", error);
      }
      
    //   console.log("the form is submitted")
    //   console.log("this is the name" , name)
    //   console.log("this is the username" , username)
    //   console.log("this is the email" , email)
    //   console.log("this is the password" , password)
    }

  return (
    <div className='container'>
      <h1>Register Now Page</h1>
      <form onSubmit={handleRegisterForm}>
        <label htmlFor='name'>Name</label>
        <input
        type='text'
        id='name'
        name='name'
        value={name}
        onChange={(inputName)=>setName(inputName.target.value)}
        required></input>
        <label htmlFor='username'>Username</label>
        <input
        type='text'
        id='username'
        name='username'
        value={username}
        onChange={(inputUsername)=>setUsername(inputUsername.target.value)}
        required></input>
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
        <button type='submit' >Register Now</button>
      </form>
    </div>
  )
}

export default RegisterPage
