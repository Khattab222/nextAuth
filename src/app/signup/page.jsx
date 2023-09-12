"use client"
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Signup = () => {
  const router = useRouter()
  const [buttonDisabled, setbuttonDisabled] = useState(false)
  const [user, setUser] = useState({
    email:"",
    password:"",
    username:""
  })

  // buttom disable controll
  useEffect(() => {
  if (user.email.length >0 && user.password.length >0 &&user.username.length >0) {
    setbuttonDisabled(false) 
  }else{
    setbuttonDisabled(true)
  }
  }, [user])
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("ssssssssssssssssss")

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
    <button type='submit' className={buttonDisabled?'disapledbtn':""} disabled={buttonDisabled} >Sign up</button>
</form>
<div className="form-section">
  <p>Have an account? <Link href="/login">Log in</Link> </p>
</div>
</div>
      

    </div>
  )
}

export default Signup
