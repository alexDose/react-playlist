import React, {useState} from 'react';
import './App.css';
import {Rating} from "./Accordion&Star/Rating";
import {Accordion} from "./Accordion&Star/Accordion";
import {OnOff} from "./OnOff/OnOff";
import {Counter} from "./counter/Counter";

function App() {
    let [number, setNumber] = useState(0)
    let [collapsed, setCollapsed] = useState(false)
    let [value, setValue] = useState(false)

    let [valueCounter, setValueCounter] = useState(0)

    const remove = () => {
        setValueCounter(0)
    }

    const addValue = () => {
        if (valueCounter < 5) {
            setValueCounter(++valueCounter)
        }
    }

    return (
        <div className={"App"}>
            <OnOff value={value} setValue={() => setValue(!value)}/>{value.toString()}
            <Accordion collapsed={collapsed} setCollapsed={() => setCollapsed(!collapsed)}/>
            <Rating value={number} setNumber={setNumber}/>
            <Counter valueCounter={valueCounter} remove={remove} addValue={addValue}/>
        </div>
    );
}

export default App;
