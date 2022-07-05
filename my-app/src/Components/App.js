import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import  {addVal, changeBool, removeVal} from '../Actions/index';
import Header from './Header'

export default function App(){

    const dispatch = useDispatch();

    const stateVar = useSelector((state) => {
        return  state.testOne
    });

    const boolVar = useSelector((state) => {
        return state.testTwo
    })
    
    

    return (
        <>
            <Header />
            <main>
                <div className='container'>
                    <h1 >Lorem ipsum</h1>
                    <h2>{stateVar}</h2>
                    <button onClick={() => dispatch(addVal())}>
                        Add Val
                    </button>
                    <button onClick={() => dispatch(removeVal())}>
                        Remove Val
                    </button>
                    <h2>Here { boolVar ? "is true" : "is false" }</h2>
                    <button onClick={() => dispatch(changeBool())}>Change bool</button>
                </div>
            </main>
        </>
    )
}