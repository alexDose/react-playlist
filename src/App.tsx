import React, {useState} from 'react';
import './App.css';
import {Rating} from "./Accordion&Star/Rating";
import {Accordion} from "./Accordion&Star/Accordion";
import {OnOff} from "./OnOff/OnOff";
import {Counter} from "./counter/Counter";

function App() {
    let [number, setNumber] = useState(0)
    let [collapsed, setCollapsed] = useState(true)
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

    const callbackOnOff = (value: boolean) => {
        setValue(value)
    }

    const callbackAccordion = (collapsed: boolean) => {
        setCollapsed(collapsed)
    }

    return (
        <div className={"App"}>
            <OnOff value={value} callback={callbackOnOff}/>
            {value.toString()}
            <Accordion title={"Menu"} collapsed={collapsed} callback={callbackAccordion}/>
            <Rating value={number} setNumber={setNumber}/>
            <Counter valueCounter={valueCounter} remove={remove} addValue={addValue}/>
        </div>
    );
}

export default App;
