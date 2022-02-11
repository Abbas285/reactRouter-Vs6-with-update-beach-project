import React,{useState} from 'react'
import { useNavigate,useLocation} from 'react-router-dom'
import { UseAuth } from './auth'
const Login = () => {
    const [userdata,setuserdata]=useState('')
    const navegate=useNavigate()
    const useremail=UseAuth()
const location=useLocation()
const redirectdata=location.state.path||'/'


    const handlelogin=()=>{
        useremail.login(userdata)
        navegate(redirectdata,{replace:true})

    }
  return (
    <div className='mt-5'>
<label c>Login Email</label>
<input type="text"onChange={(e)=>setuserdata(e.target.value)} className='mr-5'/>


<button onClick={handlelogin}> Login </button>

    </div>
  )
}

export default Login