import Header from './Header';
import Body from './Body';
import Login from './login';
import React from 'react';


export default function App(){
let logged = true;

    // Puteam sa am 2 componente si sa le afisez cu turnary, dar momentan doar am testez
    // iar dupa o sa uit sa modific 
    if (logged) {
        return (
            <div>
            <Header />
            <Body title="Rick and morty learning app" />
            </div>
        )
    }
    else {
        return (
            <>
                <Login />
            </>
        )
    }


    



}