import React from 'react'
import {useParams} from 'react-router-dom'
const UserDetails = () => {
    console.log("prpops",useParams())
    const {userid}=useParams()
  return (
    <div>
      User Details components 
      
       {userid}</div>
  )
}                                                                                      

export default UserDetails