import React from 'react'
import PostItem from '../PostItem/PostItem'

export default function PostList({room}) {
  return (
    <div>
      <h1>{room.id}</h1>
        {room.messages.map((message, key) => (
            <PostItem key={key} message={message}/>
        ))}
    </div>
  )
}
 