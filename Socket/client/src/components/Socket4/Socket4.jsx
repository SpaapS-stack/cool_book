import React, { useEffect, useState } from 'react'
import RoomList from '../RoomList/RoomList'
import PostList from '../PostList/PostList'

export default function Socket2({client}) {
   const [room, setRoom] = useState('')
   const [message, setMessage] = useState('')
  const [rooms, setRooms] = useState([])

   console.log('messages3', rooms)
   const connectRoom = () => {
    client.emit('create', room)
   }

   const upRooms = (data) => {
    const {message, room } = data;
      console.log(data)
      // setRooms(prev => [...prev, data.message])
    //   setRooms(prev => {
    //     console.log('prev', prev);
    //     return [...prev, {id: room, messages: [message]}];
    //  });
    //
    console.log('roomz', room)
    console.log('rooms', rooms)
    setRooms( prev => {
      const isRoom = prev.findIndex(r => r.id === room);
      console.log(isRoom)
      if (isRoom !== -1) {
              console.log('есть')
              console.log('prev', prev)
              prev[isRoom].messages = [...prev[isRoom].messages, message]
              return [...prev]
            } else {
              console.log('такого нет')
              return [...prev, { id: room, messages: [message] }]
            }
    })
  //     const isRoom = rooms.findIndex(r => r.id === room);
  //     console.log('rooms', rooms)
  //     if (isRoom !== -1) {
  //       console.log('есть')
  //       rooms[isRoom].messages= [...rooms[isRoom].messages, message]
  //       setRooms([...rooms]);
  //     } else {
  //       console.log('такого нет')
  //       setRooms(prev => [...prev, { id: room, messages: [message] }]);
  //     }
   }

   const sendMessage = () => {
    client.emit('mes', {message, room})
   }

   useEffect(() => {
    client.on('connect', () => {
        client.emit('connection')
    })
    client.on('mess', (data) => {
      upRooms(data)
    })
    client.on('disconnect', () => {
        console.log("Отключение")
      })
    return () => {
      client.disconnect();
      }
   }, [client])

  return (
    <div>
      <input type="text" value={room} onChange={e => setRoom(e.target.value)}/>
      <button onClick={connectRoom}>Присоединиться</button>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
      <button onClick={sendMessage}>Отправить</button>
       <RoomList rooms={rooms}/>
       {/* <PostList rooms={rooms}/> */}
    </div>
  )
}