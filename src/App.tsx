import React, {useState} from 'react';
import './App.css';
import {Rating} from "./1/Rating";
import {Accordion} from "./1/Accordion";
import {OnOff} from "./OnOff/OnOff";

function App() {
    let [num, setNum]=useState(0)
    return (
        <div>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <Accordion/>
            <Rating value={num} setNum={setNum}/>
        </div>
    );
}

export default App;
