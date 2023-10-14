"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Link from 'next/link';
import { useRouter } from 'next/navigation'

import { useSearchParams } from 'next/navigation'

const verifyEmailPage = () => {
    const router = useRouter();
    const [usedToken, setUsedToken] = useState('')
    const [verifed, setVerifed] = useState(false)

    const searchParams = useSearchParams()
   
 


    const verifyEmail =async () =>{
        console.log({token:usedToken})
 await axios.post('/api/users/confirmemail',{token:usedToken});
    setVerifed(true)
}

useEffect(() => {
    const token = searchParams.get('token')
    setUsedToken(token)


}, [])


    useEffect(() => {
     
if (usedToken.length) {

    verifyEmail()
    
}

    }, [usedToken])
    

  return (
    <div>
        {
            verifed?<>
            <h2>Email verified</h2>
      <Link href='/login'>
      Login
      </Link>
            </>:"sorry not verified"
        }
      
    </div>
  )
}

export default verifyEmailPage
