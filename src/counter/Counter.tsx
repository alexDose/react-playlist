import {Button} from "./Button";
import s from "./number.module.css"

type CounterType = {
    valueCounter: number
    remove: () => void
    addValue: () => void
}

export const Counter = (props: CounterType) => {

    const addValue = () => {
        props.addValue()
    }

    const remove = () => {
        props.remove()
    }

    return (
        <>
            <div className={s.general}>
                <div className={props.valueCounter === 5 ? s.maxNum : s.num}>{props.valueCounter}</div>
                <Button callback={addValue} name={"inc"} value={props.valueCounter}
                        valueDisabled={props.valueCounter === 5}/>
                <Button callback={remove} name={"reset"} value={props.valueCounter}
                        valueDisabled={props.valueCounter === 0}/>
            </div>
        </>
    )
}