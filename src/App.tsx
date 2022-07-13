import React, {useState} from 'react';
import './App.css';
import {Rating} from "./Accordion&Star/Rating";
import {Accordion} from "./Accordion&Star/Accordion";
import {OnOff} from "./OnOff/OnOff";

function App() {
    let [number, setNumber]=useState(0)

    return (
        <div className={"App"}>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <Accordion/>
            <Rating value={number} setNumber={setNumber}/>
        </div>
    );
}

export default App;
