import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleadd=() => {
        const newCount=count+1;
        setCount(newCount);
        if(newCount==10){
            setCount(0);
        }
    }

    const counterStyle = {
        border: '2px solid black',
        padding: '10px',
        margin: '10px'
    };

    return (
        <div style={counterStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleadd}>Add</button>
        </div>
    );
}