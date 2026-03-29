import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log('Button clicked.');
        setCount(count + 1);
    };

    const counterStyle = {
        border:'2px solid yellow',
    };
    return (
        <div style={counterStyle}>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}