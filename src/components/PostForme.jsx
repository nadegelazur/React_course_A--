import React from 'react';
import { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForme = ({create}) => {
    // состояние post в кот по умолчанию будет объект
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        // новый объект с состоянием из forme - ...post и id
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        // очищаем input
        setPost({title: '', body: ''})
      }

    return (
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

    );
};

export default PostForme;