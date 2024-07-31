import React, { useEffect, useState } from 'react'
import RoomList from '../RoomList/RoomList.jsx'

export default function Socket({client}) {
  const [room, setRoom] = useState('')
   const [message, setMessage] = useState({text: ''})
   const [messages, setMessages] = useState([])

  const connectRoom = () => {
    client.emit('create', room)
  }

  const sendMessage = () => {
    console.log('Что-то пришло')
    client.emit('mes', {message, room})
  }

  useEffect(() => {
    client.on('connect', () => {
      client.emit('connectf', 'Привет')
    })

    // client.on('mess', (data) => {
    //   // const {message, room } = data;
    //   console.log(data)
    //   // const isRoom = rooms.findIndex(r => r.id === room)
    //   setMessages((prevMessages) => [...prevMessages, data.message]);
    //   console.log('room', messages)
    //   // if (isRoom !== -1) {
    //   //   const updatedRooms = [...rooms];
    //   //   updatedRooms[isRoom].messages.push(message.text);
    //   //   setRooms([updatedRooms]);
    //   //   // setRooms({karp: 'karp'})
    //   // } else {
    //   //   setRooms(prev => [...prev, { id: room, messages: message.text }]);
    //   //   // setRooms({karp: 'cazan'})
    //   // }
    // })
    client.on('mess', (data) => {
      setMessages(prevMessages => [...prevMessages, data.message]);
      console.log('room', messages)
      console.log(message)
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
      <input type="text" value={message.text} onChange={(e) => setMessage({text: e.target.value})}/>
      <button onClick={sendMessage}>Отправить</button>
      <RoomList rooms={messages}/>
    </div>
  )
}
