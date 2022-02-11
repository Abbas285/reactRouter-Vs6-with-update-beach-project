import React from 'react'
import { useParams } from 'react-router-dom'
const Admin = () => {
    console.log("params",useParams())
  return (
    <div>Admin</div>
  )
}

export default Admin