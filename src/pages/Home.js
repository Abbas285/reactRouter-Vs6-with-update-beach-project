import React from 'react'
import Hero from './../beach components/Hero'
import Banner from './../beach components/Banner'
import {Link} from 'react-router-dom'
import  Services from './../beach components/Service'
import FeaturedRome from './../beach components/FeaturedRooms'
const Home = () => {
  return (
    <>
    <Hero  >
<Banner 
title="Luxuries rooms"
subtitle="deluxe rooms starting at $299"
>
<Link to="/rooms" className='btn-primaryS'>
OUR ROOMS
</Link>

</Banner>
    </Hero>
    <Services/>
    <FeaturedRome/>
    </>
  )
}

export default Home
