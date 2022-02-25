import React from 'react'
import Hero from '../beach components/Hero'
import Banner from './../beach components/Banner'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div>
    <Hero>
<Banner 
title="404"
subtitle="page not found">
<Link to='/' className='btn-primaryS'>
  RETURN HOME</Link>
</Banner>
    </Hero>
    </div>
  )
}

export default Error
