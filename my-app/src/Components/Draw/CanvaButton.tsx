
interface propsInterface {
    btnText: string,
    value?: any;
    disabled? : boolean,
    handleOnclick: (e: string | any) => void,
    active? : string
}

export default function CanvaBtn( props: propsInterface) {


    return (
        <button  disabled={props.disabled} className={`draw__primary-btn ${props.active}`} onClick={props.handleOnclick}>{props.btnText}</button>
    )
}