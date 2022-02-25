import React from 'react'
import Hero from '../beach components/Hero'
import Banner from '../beach components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../beach components/RoomContainer'
const Rooms = () => {
  return (
    <div>
   <Hero hero="roomsHero">
<Banner
title="OUR ROOMS">
<Link to="/" className='btn-primaryS'> RETURN HOME</Link>
</Banner>
   </Hero>
   <RoomContainer/>
    </div>
  )
}

export default Rooms
