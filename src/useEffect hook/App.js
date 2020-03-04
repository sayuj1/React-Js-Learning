import React, { useState, useEffect, Fragment } from 'react';

// functional component
const App = () => {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(10);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count1 > 0) {
            setCount1(count1 - 1);
        }

    };

    useEffect(() => {
        console.log("useEffect called");
    }, [count]);

    return (
        <Fragment>
            <h1>Count: {count}</h1>
            <button type="button" onClick={handleIncrement}>Increase</button>
            <h1>Count: {count1}</h1>
            <button type="button" onClick={handleDecrement}>Decrease</button>
        </Fragment>

    )
}

export default App;