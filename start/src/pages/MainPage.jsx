import React, {useEffect, useMemo, useState} from 'react'
import PostList from '../components/PostList/PostList';
import MyModal from '../UI/MyModal/MyModal';
import AddPost from '../components/AddPost/AddPost';
import Basket from '../components/Basket/Basket';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import Slider from '../components/Slider/Slider';

export default function MainPages() {
    const [posts, setPosts] = useState([]);
      const [visableModal, setVisableModal] = useState(false);
      const [find, setFind] = useState('');
      const [updatePage, setUpdatePage] = useState(0)
    
      const deletePost = (id) => {
        
        axios.delete(`http://localhost:8080/api/${id}`).then(resp => setPosts(posts.filter(p => p.id !== resp.data.id)));
      }
      const findPostsAction = (value) => {
        setFind(value);
      }

      const filterPosts = useMemo(() => {
        return posts.filter(p => p.title.toLowerCase().includes(find.toLowerCase()))
      }, [find, posts])
      useEffect(() => {
        axios.get('http://localhost:8080/api/').then(resp => setPosts(resp.data)).catch(resp => console.log('get',resp));
      }, [updatePage])

  return (
    <div className="App">
      <Link to='/other'>Другая страница</Link>
      <Link to='/registration'>Войти</Link>
      <Link to='/avtorization'>Авторизация</Link>
      <input type="text" value={find} onChange={(e) => findPostsAction(e.target.value)}/>
    {posts && <PostList posts={filterPosts} deletePost={deletePost} setUpdatePage={setUpdatePage}/>}
    <MyModal visableModal={visableModal} setVisableModal={setVisableModal}>
      <AddPost posts={posts} setPosts={setPosts}/>
    </MyModal>
    <button onClick={() => setVisableModal(true)}>Добавить</button>
    <Basket/>
    <button onClick={() => setUpdatePage(updatePage + 1)}>Обновить</button>
    <Slider/>
  </div>
  )
}
