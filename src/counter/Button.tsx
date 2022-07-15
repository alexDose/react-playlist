type ButtonType = {
    callback: () => void
    name: string
    value: number
    valueDis: boolean
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return <button disabled={props.valueDis} onClick={onClickHandler}>{props.name}</button>
}
