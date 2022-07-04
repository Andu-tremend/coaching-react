import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import  {addVal, changeBool} from '../Actions/index';


export default function App(){

    const dispatch = useDispatch();

    const stateVar = useSelector((state) => {
        return  state.testOne
    });

    

    return (
        <>
            <h1>Lorem ipsum</h1>
            <h2>{stateVar}</h2>
            <button onClick={() => dispatch(addVal())}>
                Add Val
            </button>

            <button onClick={() => dispatch(changeBool())}>Change bool</button>
        </>
    )
}