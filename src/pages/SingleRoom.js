import React,{useContext,useState} from 'react'
import defaultimages from '../images/room-1.jpeg'
import Hero from './../beach components/Hero'
import Banner from './../beach components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from  './../context'
import {useParams} from 'react-router-dom'
 import StyledHero from './../beach components/StyledHero'
const SingleRoom = () => {
  const {slug}=useParams()
  const {getRooms}=useContext(RoomContext)
const [slugid,setSlug]=useState(slug)
const [apidata,setdata]=useState()
const [defaultBcg,setDefaultBcg]=useState()

const room=getRooms(slugid)
console.log("roomsdata",room)
if(!room)
  return (<div className='error'>
<h3>
  no souch room could be found ...
</h3>
<Link to="/rooms" className='btn-primaryS'>
  Back to Rooms
</Link>
</div>)

     const {breakfast,capacity,description,extras,
      featured,id,images,name,pets,price,size,type}=room 
      
      const [mainimage,...defaultimage]=images
  return (
    <>
    <StyledHero img={mainimage||defaultBcg}>
      <Banner title={`${name} room`}>
<Link to='/rooms' className='btn-primaryS'>
Back to Room
</Link>

      </Banner>

    </StyledHero>
<section className='single-room'>
  <div className='single-room-images'>
    {
defaultimage.map(image=>{
  return <img src={image} />
})
    }

  </div>
  <div className='single-room-info'>
<article className='desc'>
<h3>details</h3>
<p>{description}</p>
</article>
<article className='info'>
<h3>info</h3>
<h6>price:${price}</h6>
<h6>Size:${size} SQFT</h6>
<h6>max capacity:{capacity>1?`${capacity} people`:`${capacity} person`}</h6>
<h6>{pets?"pets allowed":"no pets are allowed"}</h6>
<h6>{breakfast&&"free breakfast included"}</h6>
</article>
  </div>
</section>
<section className='room-extras'>
  <h6>extras</h6>
<ul className='extras'>
{
  extras.map((item,index)=>{
    return<li key={index}>
- {item}
    </li>
  })
}
</ul>
</section>


    </>
    )

  }
export default SingleRoom