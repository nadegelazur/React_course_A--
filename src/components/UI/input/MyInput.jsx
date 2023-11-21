import React from 'react';
import classes from './MyInput.module.css'
// ссылка куда React передатаё извлекаемые компоненты из Input 
// const MyInput = React.forwardRef((props, ref) => {
//     return (
//         <input ref={ref} {...props} className={classes.myInput} />
//     );
// });

const MyInput = (props) => {
    return (
        <input {...props} className={classes.myInput} />
    );
};

export default MyInput;