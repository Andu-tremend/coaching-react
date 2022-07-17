import Header from './Header';
import Body from './Body';
import Login from './login';
import React from 'react';
import {loggedIn} from '../Actions/actions';
import {useSelector, useDispatch} from 'react-redux';



export default function App(){
let logged = true;

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
            <main className='autentification-main-wrapper'>
                <Login />
            </main>
        )
    }


    



}