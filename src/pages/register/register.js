import React from 'react'
import { Link } from 'react-router-dom'
import "./register.css"

export default function Register() {
  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm'>
        <label>Username</label>
        <input className='registerInput' type='text' placeholder='username goes here..' />
        <label>Email</label>
        <input className='registerInput' type='text' placeholder='email goes here..' />
        <label>Password</label>
        <input className='registerInput' type='password' placeholder='password' />
        <button className='registerButton'>Register</button>
      </form>
      <button className='registerLoginButton'><Link to="/login">Login</Link>
      </button>
    </div>
  )
}
