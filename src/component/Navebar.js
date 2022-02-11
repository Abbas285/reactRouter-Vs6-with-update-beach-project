import React from 'react'
import { NavLink } from 'react-router-dom'
import { UseAuth } from './auth'

const Navebar = () => {
  const useremail=UseAuth()
    const naveLinkStyles=({isActive})=>{
     
        return{
            fontWeight:isActive ?'bold':'normal',
            
        }
    }

  return (
    <nav className='navbarprim'>
        <NavLink  style={naveLinkStyles} to="/" >Home</NavLink>
        <NavLink style={naveLinkStyles} to="/about">About</NavLink>
        <NavLink style={naveLinkStyles} to="/product">Product</NavLink>
       
        
          <NavLink style={naveLinkStyles} to="/profile">User Profile</NavLink>
        
       
        {
          !useremail.user &&<NavLink style={naveLinkStyles} to="/Login">Login</NavLink>
        }
        
      </nav>
  )
}

export default Navebar
