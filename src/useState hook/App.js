import React, { useState, Fragment } from "react";

// making functional app component

function App() {
    const [name, setName] = useState("Sayuj");
    const [roll, setRoll] = useState(100);

    const handleClick = () => {
        setName("Varun");
        setRoll(101);
    }
    return (
        <Fragment>
            <h1>Name: {name}</h1>
            <h2>Roll: {roll}</h2>
            <button onClick={handleClick}>Update</button>
        </Fragment>
    )
}

export default App;