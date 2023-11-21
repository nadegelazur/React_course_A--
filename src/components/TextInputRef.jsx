import React from 'react';
import { useRef } from 'react';
import MyButton from './UI/button/MyButton';

const TextInputRef = () => {
    // получение ДОСТУП напрямую к DOM эл-ту
    const inputContentRef = useRef()

    const addNewText = (e) => {
        // здесь нужна ссылка куда React нужно передать извлекаемые компоненты
        // значение введённое в инпут
        console.log(inputContentRef.current.value)
        // извлечение DOM эл-та input  в целом
        console.log(inputContentRef.current)
        e.preventDefault();
    }
    return (
        <div>
            <input ref={inputContentRef} type="text"></input>
            <MyButton onClick={addNewText}>Add the Text</MyButton>
        </div>
    );
};

export default TextInputRef;