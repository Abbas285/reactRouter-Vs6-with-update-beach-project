import React from 'react'
import RoomeFilterRoom from './RoomeFilterRoom'
import RoomeList from './RoomList'
import Loading from './Loading'
import {withRoomConsumer} from './../context'
const RoomContainer = ({context}) => {
const {loading,rooms,sortedRooms}=context
if(loading){
    return <Loading/>
}
return (<div>
    <RoomeFilterRoom rooms={rooms}/>
    <RoomeList  rooms={sortedRooms}/>
</div>)

}

export default   withRoomConsumer(RoomContainer)