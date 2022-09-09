import { ChangeEvent } from "react"

interface propsInterface {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
    type: string, 
    max?: number,
    min?: number, 
    step?: number
}

export default function CanvaInput (props: propsInterface) {

    return (
        <input onChange= {props.handleChange} value={props.value} type={props.type}  max={props.max} min={props.min} step={props.step}/>
    )
}