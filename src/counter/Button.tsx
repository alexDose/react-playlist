type ButtonType = {
    callback: () => void
    name: string
    value: number
    valueDisabled: boolean
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return <button disabled={props.valueDisabled} onClick={onClickHandler}>{props.name}</button>
}
