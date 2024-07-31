import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromBasket } from '../../store/basketSlice';

export default function Basket() {
    const basketPosts = useSelector(state => state.basket);

    const dispatch = useDispatch();
  return (
    <div>
      {basketPosts.allCount !== 0 && <h2>{basketPosts.allCount}</h2>}
        {basketPosts.posts.map((post, key) => (
            <div key={key}>
                <h3>{post.title}</h3>
                <p>{post.count}</p>
                <button onClick={() => dispatch(deleteFromBasket(post.id))}>Удалить</button>
            </div>
        ))}
    </div>
  )
}
