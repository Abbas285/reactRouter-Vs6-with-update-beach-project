import React from 'react'
import { UseAuth } from './auth'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  const navegate=useNavigate()
  const useremail=UseAuth()
  const handlelogout=()=>{
    useremail.logout()
    navegate('/')
  }
  return (
    <div>Profile
<br/>

<h1>User name ={useremail.user}</h1>
<button onClick={handlelogout}>
Logout
    </button>

    </div>
    
  )
}

export default Profile