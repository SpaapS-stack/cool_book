import React,{useState} from 'react'
import classes from './PostItem.module.css'
import {useDispatch} from 'react-redux'
import {addInBasket} from '../../store/basketSlice'
import MyModal from '../../UI/MyModal/MyModal';
import UpdatePost from '../UpdatePost/UpdatePost';

export default function PostItem({post, deletePost, setUpdatePage}) {
  const [visable, setVisable] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className={classes.post}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button onClick={() => deletePost(post['_id'])}>Удалить</button>
        <button onClick={() => dispatch(addInBasket(post))}>Добавить в корзину</button>
        <button onClick={() => setVisable(true)}>Изменить</button>
        <MyModal visableModal={visable} setVisableModal={setVisable}>
          <UpdatePost  post={post} setUpdatePage={setUpdatePage}/>
        </MyModal>
    </div>
  )
}
