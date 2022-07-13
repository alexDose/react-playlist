import React from "react";
import "../cursor.css"

type StarType = {
    selected: boolean
    callback: () => void
}
export const Star = (props: StarType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return <span className={"cursor"} onClick={onClickHandler}>{props.selected ? <b>star </b> : 'star '}</span>
}