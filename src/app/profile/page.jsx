"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import toast, { Toaster } from "react-hot-toast"

const ProfilePage = () => {
    const router =useRouter()
    const logout =async () =>{
        console.log("logout")
        const {data} =await axios.get('/api/users/logout');
        toast.success(data.message)
       router.push('/login')
    }
  return (
    <div style={{height:'100vh',color:'#fff', display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
      <div><Toaster/></div>
        <h2>profile page</h2>
        <button onClick={logout} className="Logoutbtn"> Logout
</button>
      
    </div>
  )
}

export default ProfilePage
