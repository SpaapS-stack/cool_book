import React from 'react'
import PostList from '../PostList/PostList'

export default function RoomList({rooms}) {
  return (
    <div>
      {/* <h1>{rooms.id}</h1> */}
      {rooms.map((room) => (
        <PostList room={room}/>
      ))}
    </div>
  )
}
