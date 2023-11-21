import React, {useState} from 'react';

import PostForme from './components/PostForme';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MySelect from './components/UI/select/MySelect';

import './styles/app.css'

// rsc - егнерировать компотнент
// state - состояние компонента параметр (значение по умолчанию)
// useState - управление состоянием


function App() {
    // Чтобы не создавать для каждого Input состояние, нужно исп не строку а объект
    // и для каждого Input исп какое то поле этого объекта
    
  const [posts, setPosts] = useState([
    { id:1, title: 'Javascript', body: 'Description' },
    { id:2, title: 'Python', body: 'Description' },
    { id:3, title: 'Php', body: 'Description' },
  ])
  
  const createPost = (newPost) => {
    // разворачиваем старый массив ...posts, и доб к нему вновь созд newPost кот. нах в папке PostForme 
    setPosts([...posts, newPost])
  }
  // получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
 
  return (
    <div className="App">

      <PostForme create={createPost}/>
      <hr style={{margin: '15px 0px'}}/>

      <div>
        <MySelect 
          defaultValue="Sorting by: "
          options={[
            {value: 'title', name: 'Sorting by Title'},
            {value: 'body', name: 'Sorting by Description'}
          ]}
          
        />
      </div>

      {/* если длина массива не равна 0 ->  ? - то отрисовываем список постов 
                                            : - в обратном случае созд <div>
      */}
      {posts.length !== 0
        ? 
        <PostList remove={removePost} posts={posts} title={'List of post 1'}/>
        : 
        <h1 style={{textAlign: 'center'}}>Not found the Posts</h1>
      
      } 
      
      
    </div> 
  );
}

export default App;
