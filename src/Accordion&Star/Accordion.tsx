import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";


export const Accordion = () => {
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
                <div onClick={() => setCollapsed(!collapsed)}><AccordionTitle/></div>
                { collapsed && <AccordionBody/> }
        </div>
    )
}