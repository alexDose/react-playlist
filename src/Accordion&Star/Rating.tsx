import React from "react";
import {Star} from "./Star";

export type NumberStyle = 0 | 1 | 2 | 3 | 4 | 5

type RatingType = {
    value: number
    setNumber: (number: NumberStyle)=>void
}

export const Rating = (props: RatingType) => {

    const setValue = (value: NumberStyle) => {
        props.setNumber(value)
    }

    return (

        <div>
            <Star selected={props.value > 0} callback={() => setValue(1)}/>
            <Star selected={props.value > 1} callback={() => setValue(2)}/>
            <Star selected={props.value > 2} callback={() => setValue(3)}/>
            <Star selected={props.value > 3} callback={() => setValue(4)}/>
            <Star selected={props.value > 4} callback={() => setValue(5)}/>
        </div>
    )
}