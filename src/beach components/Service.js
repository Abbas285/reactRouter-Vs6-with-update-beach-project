import React,{useState} from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

const  servicedata=[
    {
        iccon:<FaCocktail/>,
        title:"Free cocktails",
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Magni,corporisi!'
    },
    {
        iccon:<FaHiking/>,
        title:"Endless Hiking",
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Magni,corporisi!'
    },
    {
        iccon:<FaShuttleVan/>,
        title:"Free shuttle",
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Magni,corporisi!'
    },
    {
        iccon:<FaBeer/>,
        title:"Strongest Beer",
        info:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Magni,corporisi!'
    },
    
]
const Service = () => {
    const [services,setervices]=useState(servicedata)
  return (
    <section className='services'>
       <Title
       title="Services"/>
       <div className='services-center'>
{
   services.map((item,index)=>{
       return <article key={index} className="service">
      <span>{item.iccon}</span>
      <h6>{item.title}</h6>
        <p>{item.info}</p>

       </article>
   }) 
}
       </div>
       
        </section >
  )
}

export default Service