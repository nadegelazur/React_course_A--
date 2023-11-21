import React from 'react';
import { useState } from 'react';


// même logique pour les Likes
const Counter = function() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount( count + 1 )
      }
    
      function decrement() {
        setCount( count - 1 )
      }
    


    return (
        <div>
            <h1>Counter {count}</h1>

            <button onClick={decrement}>Decrement - </button>
            <button onClick={increment}>Increment + </button>
        </div>
    );
};

export default Counter;