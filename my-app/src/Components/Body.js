import {useSelector, useDispatch} from 'react-redux';
import  {addVal, changeBool, removeVal} from '../Actions/index';

export default function Body (props) {

    const dispatch = useDispatch();

    const stateVar = useSelector((state) => {
        return  state.testOne
    });

    const boolVar = useSelector((state) => {
        return state.testTwo
    })

    return (
        <main>
                <div className='container'>
                    <h1 >{props.title}</h1>
                    <h2>{stateVar}</h2>
                    <button onClick={() => dispatch(addVal())}>
                        +
                    </button>
                    <button onClick={() => dispatch(removeVal())}>
                       -
                    </button>
                    <h2>This value is { boolVar ? "is true" : "is false" }</h2>
                    <button onClick={() => dispatch(changeBool())}>Change bool</button>
                </div>
        </main>

    )
}