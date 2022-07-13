import React, {useState} from 'react';
import './App.css';
import {Rating} from "./Accordion&Star/Rating";
import {Accordion} from "./Accordion&Star/Accordion";
import {OnOff} from "./OnOff/OnOff";

function App() {
    let [number, setNumber]=useState(0)
    let [collapsed, setCollapsed] = useState(false)
    let [value, setValue] = useState(false)

    return (
        <div className={"App"}>
            <OnOff value={value} setValue={() => setValue(!value)}/>{value.toString()}
            <Accordion collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)}/>
            <Rating value={number} setNumber={setNumber}/>
        </div>
    );
}

export default App;
