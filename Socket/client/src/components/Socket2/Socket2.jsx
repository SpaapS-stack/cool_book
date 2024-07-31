import React, { useEffect, useState } from 'react'
import RoomList from '../RoomList/RoomList'
import PostList from '../PostList/PostList'
import client from '../../socket'

export default function Socket2() {
   const [room, setRoom] = useState('')
   const [message, setMessage] = useState('')
  const [rooms, setRooms] = useState([])
  const [data2, setData2] = useState({message: '', room: ''})

   console.log('messages3', rooms)
   const connectRoom = () => {
    client.emit('create', room)
   }

   const sendMessage = () => {
    client.emit('mes', {message, room})
   }

   useEffect(() => {
    client.on('mess', (data) => {
      setData2(data)
    })
   }, [rooms])

   useEffect(() => {
    const {message, room } = data2;
    console.log('data2', data2)
    const isRoom = rooms.findIndex(r => r.id === room);
    console.log('rooms', rooms)
    if (isRoom !== -1) {
      console.log('есть')
      rooms[isRoom].messages= [...rooms[isRoom].messages, message]
      setRooms([...rooms]);
    } else if(data2.room === '') {
      console.log('first')
    } else {
      console.log('такого нет')
      setRooms(prev => [...prev, { id: room, messages: [message] }]);
    }
   }, [data2])
   

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
