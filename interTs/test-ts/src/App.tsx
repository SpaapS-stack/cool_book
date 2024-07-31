import React, {useState} from 'react';
import './App.css';
import { IPost } from './interface/mains';
import List from './components/List/List';
import { PostItem } from './components/PostItem/PostItem';
import { MyModal } from './UI/MyModal/MyModal';
import { ActionPost, EAction } from './components/ActionPost/ActionPost';


function App() {
  const [posts, setPosts] = useState<IPost[]>([
    {id: 1, title: 'Карп', description: 'Пресная рыба'},
    {id: 2, title: 'Сазан', description: 'Ближайший сородич карпа'},
    {id: 3, title: 'Сом', description: 'Длинная ленивая рыба'},
  ]);
  const [visable, setVisable] = useState(false);

  const deletePost = (id: number) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  return (
    <div className="App">
      <List title='постов' items={posts} renderItem={(post) => <PostItem key={post.id} post={post} posts={posts} deletePost={deletePost} setPosts={setPosts}/>} />
      <MyModal visable={visable} setVisable={setVisable}>
        <ActionPost action={EAction.add} setPosts={setPosts} posts={posts} setVisable={setVisable}/>
      </MyModal>
      <button onClick={() => setVisable(true)}>Добавить</button>
    </div>
  );
}

export default App;
