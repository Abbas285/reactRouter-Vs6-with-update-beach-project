import React, { Component } from 'react'
import items from './data'
const RoomContext=React.createContext()

 class RoomProvider extends Component {
state={
rooms:[],
sortedRooms:[],
featuredRooms:[],
loading:true,
type:"all",
capacity:1,
price:0,
minPrice:0,
maxPrice:0,
minSize:0,
maxSize:0,
breakfast:false,
pets:false,
  };
  componentDidMount(){
    const rooms=this.formateData(items)
const featuredRooms=rooms.filter(room=>room.featured===true)   
let maxPrice=Math.max(...rooms.map(item=>item.price))
let maxSize=Math.max(...rooms.map(item=>item.size))
this.setState({
  rooms,
  featuredRooms,
  sortedRooms:rooms,
  loading:false,
  maxPrice,
  maxSize
})
  }
handlechange=(event)=>{
 
const target=event.target
const value=target.type==='checkbox'?target.checked:target.value
const name=target.name
this.setState({
[name]:value
},this.filterdRooms)

}

filterdRooms=()=>{
  let {rooms,type,capacity,price,minSize,maxSize,breakfast,pets}=this.state
  let temprooms=[...rooms]
// for capacity
  capacity=parseInt(capacity)
  price=parseInt(price)


  if(capacity!==1){
    temprooms=temprooms.filter(item=>item.capacity>=capacity)
  }
  // for Room Type
  if(type!=="all"){
temprooms= temprooms.filter(item=>item.type===type)
  }

//for price
temprooms =temprooms.filter(item=>item.price<=price)

//for size
temprooms=temprooms.filter(item=>item.size>=minSize && item.size<=maxSize)
//for breakfast
if(breakfast){
  temprooms=temprooms.filter(item=>item.breakfast===true)
}
//for pets
if(pets){
  temprooms=temprooms.filter(item=>item.pets===true)
}

  this.setState({
    sortedRooms:temprooms
   })
}

  formateData=(items)=>{
let tempitems=items.map(item=>{
  let id=item.sys.id;
  let images=item.fields.images.map(image=>image.fields.file.url)
  let rooms={id,...item.fields,images}
  return rooms
})
return tempitems
  }
getrooms=(slug)=>{
  const tempitem=[...this.state.rooms]
  let room=tempitem.find((item)=>{
    return item.slug===slug
  })
  return room
}

  render() {
    return (
      <RoomContext.Provider value={{...this.state,
      getRooms:this.getrooms,
      handlechange:this.handlechange,
      filterdRooms:this.filterdRooms
      }}>
    {this.props.children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer=RoomContext.Consumer
export const withRoomConsumer=(Component)=>{
  return function ConsumerWrapper(props){
    return <RoomConsumer>
      {
        (value)=><Component  {...props} context={value} />
      }
    </RoomConsumer>
  }
}

export {
  RoomContext,RoomConsumer,RoomProvider
}

