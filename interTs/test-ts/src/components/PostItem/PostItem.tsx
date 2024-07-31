import React, { FC, useState } from 'react'
import classes from './PostItem.module.css'
import { IPost } from '../../interface/mains'
import { MyModal } from '../../UI/MyModal/MyModal';
import { ActionPost, EAction } from '../ActionPost/ActionPost';

interface IPostItemProps {
  post: IPost;
  posts: IPost[];
  setPosts: (posts: IPost[]) => void;
  deletePost: (id: number) => void;
}

export const PostItem: FC<IPostItemProps> = ({post, posts, setPosts, deletePost}) => {
  const [visable, setVisable] = useState<boolean>(false);
  
  return (
    <div className={classes.item}>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <button onClick={() => deletePost(post.id)}>Удалить</button>
      <MyModal visable={visable} setVisable={setVisable}>
        <ActionPost action={EAction.update} posts={posts} post={post} setPosts={setPosts} setVisable={setVisable}/>
      </MyModal>
      <button onClick={() => setVisable(true)}>Изменить</button>
    </div>
  )
}

