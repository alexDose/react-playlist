import React from "react";

type OnOff = {
    value: boolean
    setValue: () => void
}

export const OnOff = (props: OnOff) => {

    const Style = {
        display: "inline-block",
        padding: "2px",
        width: "30px",
        height: "20px",
        borderRadius: "2px",
        border: "1px solid black",
        background: props.value ? "palegreen" : "orangered",
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

    const callback = () => {
        props.setValue()
    }

    return (
        <div>
            <div style={Style} onClick={callback}>{props.value ? "On" : "Off"}</div>
            <div style={indiсatorStyle}></div>
        </div>
    )

}