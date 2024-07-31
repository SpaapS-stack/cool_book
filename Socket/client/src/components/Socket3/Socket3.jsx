import React, { useEffect, useState } from 'react'
import RoomList from '../RoomList/RoomList'
import PostList from '../PostList/PostList'

export default function Socket3({client}) {
   const [room, setRoom] = useState('')
   const [message, setMessage] = useState('')
   const [messages, setMessages] = useState([])

   console.log('messages3', messages)
   const connectRoom = () => {
    client.emit('create', room)
   }

   const sendMessage = () => {
    client.emit('mes', {message, room})
   }

   useEffect(() => {
    client.on('connect', () => {
        client.emit('connection')
    })
    client.on('mess', (data) => {
        console.log('data', data)
        setMessages(prev => [...prev, data.message])
        console.log('messages', messages)
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
       <PostList rooms={messages}/>
    </div>
  )
}