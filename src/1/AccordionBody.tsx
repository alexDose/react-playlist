import React from "react";

type AccordionBody = {
/*
    collapsed: boolean
*/
}

export const AccordionBody = (props: AccordionBody) => {
/*
    if (props.collapsed) {
*/
        return (
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        )
/*    } else {
        return (
            <div></div>
        )
    }*/
}