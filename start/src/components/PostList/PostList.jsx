import React from 'react'
import PostItem from '../PostItem/PostItem'

export default function PostList({posts, deletePost, setUpdatePage}) {
  return (
    <div>
        {posts.map((post, key) => (
            <PostItem key={key} post={post} deletePost={deletePost} setUpdatePage={setUpdatePage}/>
        ))}
    </div>
  )
}
