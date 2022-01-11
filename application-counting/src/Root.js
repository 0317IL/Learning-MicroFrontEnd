import React, { useState } from "react";

const Root = ({ name }) => {
    const [counter, setCounter] = useState(0);

    const handleChange = type => {
        setCounter(oldCounter => oldCounter + type)
    }

    return(
        <>
            <h1>Application: {name}</h1>
            <h3>Counter: {counter}</h3>
            <button onClick={() => handleChange(-1)}> Decremente</button>
            <button onClick={() => handleChange(1)}> Incremente</button>
        </> 
    );
}

export default Root;