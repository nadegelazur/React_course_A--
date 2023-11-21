import React, {useState} from 'react';

const TextInput = () => {
    const [value, setValue] = useState('Text in Input');
    // console.log(value)
    
    return (
        <div>
            <h1>{value}</h1>
            <input  
                type="text" 
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </div>
        
    );
};

export default TextInput;