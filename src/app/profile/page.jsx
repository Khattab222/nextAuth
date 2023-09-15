"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect,useState } from "react"
import toast, { Toaster } from "react-hot-toast"

const ProfilePage = () => {
    const router =useRouter()
    const [userData, setuserData] = useState({})

    useEffect(() => {
      
    
      getUserDetails()
    }, [])
    
    // logout
    const logout =async () =>{
        console.log("logout")
        const {data} =await axios.get('/api/users/logout');
        toast.success(data.message)
       router.push('/login')
    }

    // get user data 
    const getUserDetails =async () =>{

      const {data} = await axios.get('/api/users/me');
      setuserData(data.user);
      console.log(data.user);

    }
  return (
    <div style={{height:'100vh',color:'#fff', display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
      <div><Toaster/></div>
        <h2>profile page</h2>
        <h2>Welcome {userData.username}</h2>
        <button onClick={logout} className="Logoutbtn"> Logout
</button>
      
    </div>
  )
}

export default ProfilePage
