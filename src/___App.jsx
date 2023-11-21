import React, {useState} from 'react';
import { useRef } from 'react';
import ClassCounter from './components/classCounter';
import Counter from './components/Counter';
import Like from './components/Likes';
import PostItem from './components/PostItem'
import TextInput from './components/TextInput';
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
   // извлекаем данные из инпута(НЕуправляемого эл-та), по умолчанию пустая строка " "
   // получение ДОСТУП напрямую к DOM эл-ту
  const bodyInputRef = useRef();
  
  const addNewPost = (e) => {
    
    e.preventDefault()
    console.log(title)
    console.log(body)
    
    // здесь нужна ссылка кот. нах в папке MyInput куда React нужно передать извлекаемые компоненты
    // console.log(bodyInputRef.current.value)
  }
  //* the same function 
  // finction addNewPost() {
    
  // }
  return (
    <div className="App">

      <Counter />
      <ClassCounter />
      <Like />
      <TextInput />
      <TextInputRef />
      <hr/>
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

        {/* Неуправляемый, неконтролируемый компонент */}
        <MyInput 
          ref={bodyInputRef}
          type="text"
          placeholder="hook useRef how does it work"
        />
        
      </form>

      <PostList posts={posts} title={'List of post 1'}/>
      <PostList posts={posts2} title={'List of post 2'}/>

    </div> 
  );
}

export default App;
