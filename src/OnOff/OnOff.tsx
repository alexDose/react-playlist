import React from "react";

type OnOffType = {
    value: boolean
    callback: (value: boolean) => void
}

export const OnOff = (props: OnOffType) => {

    const Style = {
        display: "inline-block",
        padding: "2px",
        width: "30px",
        height: "20px",
        borderRadius: "2px",
        border: "1px solid black",
        background: props.value ? "palegreen" : "hotpink",
        cursor: "pointer"
    }

    /*    const offStyle = {
            display: "inline-block",
            padding: "2px",
            width: "30px",
            height: "20px",
            borderRadius: "2px",
            border: "1px solid black",
            marginLeft: "5px",
            background: value ? "white" : "red",
            cursor: "pointer"
        }*/

    const indiсatorStyle = {
        display: "inline-block",
        marginLeft: "10px",
        width: "20px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        background: props.value ? "green" : "red"
    }

    const onClickHandler = () => {
        props.callback(!props.value)
    }

    return (
        <div>
            <div style={Style} onClick={onClickHandler}>{props.value ? "On" : "Off"}</div>
            <div style={indiсatorStyle}></div>
        </div>
    )

}