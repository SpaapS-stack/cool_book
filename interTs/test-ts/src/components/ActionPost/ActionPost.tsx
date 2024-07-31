import React, { FC, useState } from 'react'
import classes from './ActionPost.module.css'
import { IPost } from '../../interface/mains'

export enum EAction{
    add = 'add',
    update = 'update'
}

interface IActionPost{
    action: EAction;
    posts?: IPost[];
    post?: IPost;
    setPosts: (post: IPost[]) => void;
    setVisable: (visable: boolean) => void;
}

export const ActionPost: FC<IActionPost> = ({action, posts = [], post = {id: Date.now(), title: '', description: ''}, setPosts, setVisable}) => {

    const [newPost, setNewPost] = useState<IPost>(post || {id: Date.now(), title: '', description: ''});

    const addPost = () => {
        const nwPost = {...newPost, id: Date.now()}
        setPosts([...posts, nwPost])
        setVisable(false);
        setNewPost({id: Date.now(), title: '', description: ''})
    }

    const updatePost = (post: IPost) => {
        const updtPost = posts.findIndex(p => p.id === post.id)
        posts[updtPost] = newPost
        setPosts([...posts])
        setVisable(false);
    }


  return (
    <div className={classes.wrapper}>
        <label>Заголовок</label>
        <input type="text"  value={newPost.title} onChange={(e) => setNewPost({...newPost, title: e.target.value})}/>

        <label>Описание</label>
        <input type="text" value={newPost.description} onChange={(e) => setNewPost({...newPost, description: e.target.value})}/>
        
        <button onClick={action === EAction.add ? addPost : () => updatePost(post)}>{action === EAction.add ? 'Добавить' : 'Изменить'}</button>
    </div>
  )
}
