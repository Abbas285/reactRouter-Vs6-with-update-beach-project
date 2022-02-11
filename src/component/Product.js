import React from 'react'
import { Outlet ,NavLink } from 'react-router-dom'
const PrODUCT = () => {
    const naveLinkStyles=({isActive})=>{
        return{
            fontWeight:isActive ?'bold':'normal',
        }
    }
  return (
    <div>
      main products components

<nav>
    <NavLink to="feturedproduct" style={naveLinkStyles}>Fetured component</NavLink>
    <NavLink to="newproduct" style={naveLinkStyles}>Fetured New Component</NavLink>
</nav>
<Outlet/>
    </div>
  )
}

export default PrODUCT
