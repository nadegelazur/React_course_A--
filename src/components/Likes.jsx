import react from "react";
import { useState } from "react";

const Like = () => {
    const [likes, setLikes] = useState(0);

    function increment() {
        setLikes( likes + 1 )
      }
    
      function decrement() {
        setLikes( likes - 1 )
      }
    


    return (
        <div>
            <h1>Likes {likes}</h1>

            <button onClick={decrement}>Decrement - </button>
            <button onClick={increment}>Increment + </button>
        </div>
    );
};

export default Like;