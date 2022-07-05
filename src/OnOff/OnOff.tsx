import React, {useState} from "react";

export const OnOff = () => {

    let [on, setOn] = useState(false)

    const onStyle = {
        display: "inline-block",
        padding: "2px",
        width: "30px",
        height: "20px",
        borderRadius: "2px",
        border: "1px solid black",
        background: on ? "green" : "white",
        cursor: "pointer"
    }

    const offStyle = {
        display: "inline-block",
        padding: "2px",
        width: "30px",
        height: "20px",
        borderRadius: "2px",
        border: "1px solid black",
        marginLeft: "5px",
        background: on ? "white" : "red",
        cursor: "pointer"
    }

    const indiсatorStyle = {
        display: "inline-block",
        marginLeft: "10px",
        width: "20px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        background: on ? "green" : "red"

    }

    return (
        <div>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={indiсatorStyle}></div>
        </div>
    )

}