import React from "react";
import {Star} from "./Star";

type NumberStyle = 1 | 2 | 3 | 4 | 5

type RatingType = {
    value: number
    setNum: (number: NumberStyle)=>void
}

export const Rating = (props: RatingType) => {

    const setNumber = (number: NumberStyle) => {
        props.setNum(number)
    }

    return (

        <div>
            <Star selected={props.value > 0}/>
            <button onClick={() => setNumber(1)}>1</button>
            <Star selected={props.value > 1}/>
            <button onClick={() => setNumber(2)}>2</button>
            <Star selected={props.value > 2}/>
            <button onClick={() => setNumber(3)}>3</button>
            <Star selected={props.value > 3}/>
            <button onClick={() => setNumber(4)}>4</button>
            <Star selected={props.value > 4}/>
            <button onClick={() => setNumber(5)}>5</button>
        </div>
    )
}