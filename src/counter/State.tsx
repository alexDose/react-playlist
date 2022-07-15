import {Button} from "./Button";
import {useState} from "react";
import s from "./number.module.css"

export const Counter = () => {
    let [value, setValue] = useState(0)
    let [valueDis1, setValueDis1] = useState(false)
    let [valueDis2, setValueDis2] = useState(true)

    const addValue = () => {
        if (value < 5) {
            setValue(++value)
        }

        if (value > 0) {
            setValueDis2(false)
        }

        if (value === 5) {
            setValueDis1(!valueDis1)
        }
    }

    const remove = () => {
        setValue(0)
        setValueDis1(false)
        setValueDis2(true)
    }

    return (
        <>
            <div className={s.general}>
                <div className={value === 5 ? s.maxNum : s.num}>{value}</div>
                <Button callback={addValue} name={"inc"} value={value} valueDis={valueDis1}/>
                <Button callback={remove} name={"reset"} value={value} valueDis={valueDis2}/>
            </div>
        </>
    )
}