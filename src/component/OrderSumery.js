import React from 'react'
import {useNavigate} from 'react-router-dom'
const OrderSumery = () => {
    let navigate=useNavigate()
  return (
    <div>
      order Sumery
      <br/>
      <button onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}

export default OrderSumery
