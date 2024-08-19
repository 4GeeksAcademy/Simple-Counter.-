//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home.jsx";


// include your styles into the webpack bundle
import "../styles/index.css";


//render your react application

let intervalID = null;    

const MainComponent = () => {
    const [counter, setCounter] = useState(0);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [targetValue, setTargetValue] = useState(null);
    
    useEffect(() => {
        if (targetValue !== null && counter === targetValue) {
            alert(`El contador ha llegado a ${targetValue}!`);
        }
    }, [counter, targetValue]);

    const updateCounter = () => {
        setCounter(prevCounter => isCountingDown ? prevCounter - 1 : prevCounter + 1);
    };

    const startCounter = () => {
        if (!intervalID) {
            intervalID = setInterval(updateCounter, 1000);
        }
    };

    const stopCounter = () => {
        clearInterval(intervalID);
        intervalID = null;
    };

    const resetCounter = () => {
        clearInterval(intervalID);
        intervalID = null;
        setCounter(0);
    };

    const resumeCounter = () => {
        if (!intervalID) {
            intervalID = setInterval(updateCounter, 1000);
        }
    };
    
    return <>
        <Home seconds={counter}/>

        <label>Starting value</label>
        <input type="number" onChange={(event) => {
            setCounter(parseInt(event.target.value,10));
        }} />

        <label>target value</label>
        <input type="number" onChange={(event) => {
            setTargetValue(parseInt(event.target.value,10));
        }} />

        <div className="p-2 d-flex gap-2">
            <button onClick={startCounter} className="btn btn-success">Start</button>

            <button onClick={stopCounter} className="btn btn-danger">Stop</button>

            <button onClick={resetCounter} className="btn btn-warning">Reset</button>

            <button onClick={resumeCounter} className="btn btn-info">Resume</button>

            <button onClick={() => {
                setIsCountingDown(!isCountingDown);
                }} className="btn btn-secondary">
                {isCountingDown ? "Switch to Count Up" : "Switch to Count Down"}
            </button>

        </div>

           
    </>

}

let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<MainComponent/>);
