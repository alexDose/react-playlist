import React from "react";

type StarType = {
    selected: boolean
}

export const Star = (props: StarType) => (props.selected) ? <span><b>star </b></span> : <span>star </span>
