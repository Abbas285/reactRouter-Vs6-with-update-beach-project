import React from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
  let navigate=useNavigate()
  return (
    <div>
      Home

      <button className='btn btn-primary' onClick={()=>navigate('/OrderSumery')}> go to sumerize component</button>
    </div>
  )
}

export default Home
