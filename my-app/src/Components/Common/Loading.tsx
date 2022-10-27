export default function Loading(props: any) {
    return (
        <div className="loading__wrapper">
            <div>
                <img  src={`icon-rick.png`} />
                <p className="loading__text">{props.text}</p>
            </div>
        </div>
    )
}