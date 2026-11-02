import { useState } from 'react';

export const Counter = () => {
const [c, setCount] = useState(0);
    function handleClick() {
        if (c < 10) {
        setCount(c + 1);
        }
    };

    return (
        <>
            <h1>Counter: {c}</h1>
            <button onClick={handleClick}>Increment</button>
        </>
    );
};