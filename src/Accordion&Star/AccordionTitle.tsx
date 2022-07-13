import React from "react";
import '../cursor.css'

type AccordionTitleType = {
    callback: () => void
    title: string
}

export const AccordionTitle = (props: AccordionTitleType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return <h3 className={'cursor'} onClick={onClickHandler}>--{props.title}--</h3>
}