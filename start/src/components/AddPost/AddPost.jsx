import axios from 'axios';
import React, {useState} from 'react'

export default function AddPost({posts, setPosts}) {
    const [newPost, setNewPost] = useState({title: '', body: ''});

    const addPosts = () => {
        // const addNewPost = {...newPost, id: Date.now() }
        // setPosts([...posts, addNewPost])
        try {
          axios.post('http://localhost:8080/api/addPost', {...newPost, id: Date.now() }).then(nPost => {setPosts([...posts, nPost.data])})
        } catch (error) {
          
        }
    }

  return (
    <div>
        <label>Заголовок</label>
        <input type="text" value={newPost.title} onChange={(e) => {setNewPost({...newPost, title: e.target.value})}}/>
        <label>Описание</label>
        <input type="text" value={newPost.body} onChange={(e) => {setNewPost({...newPost, body: e.target.value})}}/>
        <button onClick={addPosts}>Добавить</button>
    </div>
  )
}
