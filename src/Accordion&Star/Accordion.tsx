import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionType = {
    setCollapsed: () => void
    collapsed: boolean
}

export const Accordion = (props: AccordionType) => {

    return (
        <div>
                <div><AccordionTitle title={"Menu"} callback={props.setCollapsed}/></div>
                { props.collapsed && <AccordionBody/> }
        </div>
    )
}