import React, {useState} from 'react';

import PostList from './components/PostList';

import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput'
import './styles/app.css'
import TextInputRef from './components/TextInputRef';
// rsc - егнерировать компотнент
// state - состояние компонента параметр (значение по умолчанию)
// useState - управление состоянием


function App() {
    // Чтобы не создавать для каждого Input состояние,
    // нужно исп не строку а объект и для каждого Input
    // исп какое то поле этого объекта
  const [posts, setPosts] = useState([
    { id:1, title: 'Javascript', body: 'Description' },
    { id:2, title: 'Python', body: 'Description' },
    { id:3, title: 'Php', body: 'Description' },
  ])
  // состояние post в кот по умолчанию будет объект
  const [post, setPost] = useState({title: '', body: ''})
  
  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    // очищаем input
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">

      <form>
        <h1>FORME</h1>
        {/* Управляемый компонент */}
        <MyInput 
          value={post.title}
          /* onChange - позв отслеживать что вводит пользователь */
          // в setPost мы передаем объект c предадущими полями ...post кот там есть
          // перезатирая при этом поле title: e.target.value
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Name of post"
        />
        <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="description of Post"
        />
        
        <MyButton onClick={addNewPost}>Add the Post</MyButton>
        
      </form>

      <PostList posts={posts} title={'List of post 1'}/>
      {/* <PostList posts={posts2} title={'List of post 2'}/> */}

    </div> 
  );
}

export default App;
