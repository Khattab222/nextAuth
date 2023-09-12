"use client"
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const Signup = () => {
  const [user, setUser] = useState({
    email:"",
    password:"",
    username:""
  })

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(user)

  }
  return (
    <div className='signuppage'>
    <div className="form-box">
<form className="form" onSubmit={handleSubmit}>
    <span className="title">Sign up</span>
    <span className="subtitle">Create a free account with your email.</span>
    <div className="form-container">
      <input onChange={(e)=> setUser({...user,username:e.target.value})} type="text" className="input" placeholder="user Name"/>
			<input onChange={(e)=> setUser({...user,email:e.target.value})} type="email" className="input" placeholder="Email"/>
			<input onChange={(e)=> setUser({...user,password:e.target.value})} type="password" className="input" placeholder="Password"/>
    </div>
    <button type='submit'>Sign up</button>
</form>
<div className="form-section">
  <p>Have an account? <Link href="/login">Log in</Link> </p>
</div>
</div>
      

    </div>
  )
}

export default Signup
