import React, {useState} from 'react'
import axios from 'axios';

export default function UpdatePost({post, setUpdatePage}) {
    const [newPost, setNewPost] = useState(post); //{ ['_id']: post['_id'], id: post.id, title: post.title, body: post.body}

    const updatePosts = ({post}) => {
        try {
            axios.put(`http://localhost:8080/api/update/${newPost['_id']}`, newPost).then(data => setUpdatePage(data.data))
                
                // .then(() => setUpdatePage(Date.now()))
        } catch (error) {
            console.log('Ошибка в put запросе!!!')
        }
    }

  return (
    <div>
        <label>Заголовок</label>
        <input type="text" value={newPost.title} onChange={(e) => {setNewPost({...newPost, title: e.target.value})}}/>
        <label>Описание</label>
        <input type="text" value={newPost.body} onChange={(e) => {setNewPost({...newPost, body: e.target.value})}}/>
        <button onClick={updatePosts}>Изменить</button>
    </div>
  )
}
