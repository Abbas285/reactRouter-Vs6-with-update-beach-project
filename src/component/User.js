import React from 'react'
import {Outlet,useSearchParams} from 'react-router-dom'
const User = () => {
const [searchparams,setsearparams]=useSearchParams()
const showactiveUser=searchparams.get('filter')==='active'
  return (
    <div>User
<h1>User1</h1>
<h1>User2</h1>
<h1>User3</h1>
<Outlet/>
<div>
    <button onClick={()=>setsearparams({filter:'active'})}>Active user</button>
    <button onClick={()=>setsearparams({})}>Reset Filter</button>
    
</div>
{
    showactiveUser? <h1>Showing active user</h1>:<h1>Showing all user</h1>
}
    </div>
  )
}

export default User