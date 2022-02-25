import React from 'react'
import { useContext } from 'react'
import {RoomContext} from './../context'
import Tittle from '../beach components/Title'
const getUniquevalue=(items,value)=>{
return [...new Set(items.map(item=>item[value]))]
}
const RoomeFilterRoom = ({rooms}) => {
  const context =useContext(RoomContext)


  const {
    handlechange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
    }=context;


let types=getUniquevalue(rooms,'type')
types=['all',...types];
types=types.map((item,index)=>{
  return <option value={item} key={index}>
{item}
  </option>
})

let people=getUniquevalue(rooms,'capacity')
people=people.map((item,index)=>{
  return <option value={item} key={index}>
  {item}
    </option>
})


  return (
<section className='filter-container'>
<Tittle  title="search rooms"/>
<form className='filter-form'>

{/* Start selectBox */}
  <div className='form-group'>
<label htmlFor='type'>  Room Type</label>
<select
 name="type"
 id="type"
 value={type}
 className="form-control"
 onChange={handlechange}
 >
{types}
</select>
  </div>
  {/* End selectBox */}

{/* Start Guests*/}
 <div className='form-group'>
<label htmlFor='capacity'> Guests</label>
<select
 name="capacity"
 id="capacity"
 value={capacity}
 className="form-control"
 onChange={handlechange}
 >
{people}
</select>
  </div>

  {/* End Guests*/}
{/* start price*/}
<div className='form-group'>
  <label htmlFor='price'>price ${price} </label>
  <input 
  type="range"
  name="price"
  min={minPrice}
  max={maxPrice}
  id="price"
  value={price}
  onChange={handlechange}
  className="form-control"
  />
</div>
  {/* end price*/}

    {/* start size*/}
<div className='form-group'>
<label htmlFor='size'>room size</label>
<div className='size-inputs'>
<input
type="number"
name="minSize"
id="size"
value={minSize}
onChange={handlechange}
className="size-input"
/>
<input
type="number"
name="maxSize"
id="size"
value={maxSize}
onChange={handlechange}
className="size-input"
/>
</div>

</div>

    {/* end size*/}
    <div className='form-group'>
<div className='single-extra'>
<input
type="checkbox"
name='breakfast'
id="breakfast"
checked={breakfast}
onChange={handlechange}
/>
<label htmlFor='breakfast'>breakfast</label>
</div>

<div className='single-extra'>
<input
type="checkbox"
name='pets'
id="pets"
checked={pets}
onChange={handlechange}
/>
<label htmlFor='breakfast'>pets</label>
</div>
</div>


</form>
</section>
  )
}

export default RoomeFilterRoom