import React from 'react';
import './App.css';
import Countdown from "./components/Countdown/Countdown";

function App() {
    return (
        <div className="App">
            <Countdown/>
            <Countdown counter={45}/>
            <Countdown counter={50}/>
        </div>
    );
}

export default App;
