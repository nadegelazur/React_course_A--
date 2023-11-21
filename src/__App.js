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
  const [posts, setPosts] = useState([
    { id:1, title: 'Javascript', body: 'Description' },
    { id:2, title: 'Python', body: 'Description' },
    { id:3, title: 'Php', body: 'Description' },
  ])

  const [posts2, setPosts2] = useState([
    { id:1, title: 'WordPress', body: 'Description' },
    { id:2, title: 'Ruby', body: 'Description' },
    { id:3, title: 'Node', body: 'Description' },
  ])

  // извлекаем данные из инпута(управляемого эл-та), по умолчанию пустая строка " "
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(body)

    const newPost = {
      id: Date.now(), // текущий id из базы
      title,
      body
    }
    console.log(newPost) 
    // созданный пост добавляем в массив постов
    // не изм состояние напрямую, мы вызываем ф-цию setPosts в кот п
    // и передаем массив из старого, сущ-го массива ...posts и 
    // новый пост newPost
    setPosts([...posts, newPost])
    // очищаем input
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">

      <form>
        <h1>FORME</h1>
        {/* Управляемый компонент */}
        <MyInput 
          value={title}
          /* onChange - позв отслеживать что вводит пользователь */
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Name of post"
        />
        <MyInput 
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder="description of Post"
        />
        
        <MyButton onClick={addNewPost}>Add the Post</MyButton>
        
      </form>

      <PostList posts={posts} title={'List of post 1'}/>
      <PostList posts={posts2} title={'List of post 2'}/>

    </div> 
  );
}

export default App;
