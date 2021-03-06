import React,{useState} from 'react'
import Logo from './../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
const Navebar = () => {
    const [isopen,setisopen]=useState(false)

  const  handleToggle=()=>{
        setisopen(!isopen)  
    }
  return (
  <nav className='navbar'>
      <div className='nav-center'>
          <div className='nav-header'>
<Link to="/">
<img src={Logo} alt="Beach Resort"/>
</Link>
<button type='button' className='nav-btn' onClick={handleToggle}>
<FaAlignRight className='nav-icon'/> </button>
          </div>
       <ul className={isopen?"nav-links show-nav ":"nav-links "}>
           <li>
               <Link to="/">Home</Link>
           </li>
           <li>
               <Link to="/rooms">Rooms</Link>
           </li>
           
         </ul>   

      </div>
  </nav>
  )
}

export default Navebar