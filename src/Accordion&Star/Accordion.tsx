import React, {useState} from "react";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionType = {
    callback: (collapsed: boolean) => void
    collapsed: boolean
    title: string
}

export const Accordion = (props: AccordionType) => {

    const callback = () => {
        props.callback(!props.collapsed)
    }

    return (
        <div>
                <div><AccordionTitle title={props.title} callback={callback}/></div>
                { !props.collapsed && <AccordionBody/> }
        </div>
    )
}