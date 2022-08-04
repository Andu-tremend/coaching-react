
import {useSelector, useDispatch} from 'react-redux';
import {toggleAction} from '../Actions/actions'
import LoggedUser from './LoggedUser';
import { useState } from 'react';



export default function Header(props: any) {

    const dispatch = useDispatch();

    const toggleValue = useSelector((state: any) => state);


    function toggler() {
        dispatch(toggleAction())
        localStorage.setItem("themeCookie", toggleValue.themeReducer);

    }


    const cookie = () => {
        const cookie: any = localStorage.getItem("user")
        const parsedCookie = JSON.parse(cookie);
        return parsedCookie
    }

    const [showUser, setShowUser] =  useState(false);

    const handleUserToggle = () => {
        setShowUser( oldVal => !oldVal)
    }


    const user = cookie().username;

    return (
        <header className={` header__${toggleValue.themeReducer ?  "morty" : "rick"}`} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 header__logo-wrapper">
                        <div className='logo'>
                            <img src='logo.png' width='100px' alt='logo'/>
                        </div>
                    </div>
                    <div className="col-lg-7 header__menu-wrapper">
                        <h1 style={{color: '#fff', margin: 'auto'}}>Rick and morty WIP APP</h1>
                    </div>
                    <div className="col-lg-2 theme-toggle__wrapper">
                        <div className='user__toggle-wrapper'>
                            <div onClick={handleUserToggle} className='user__toggle'>
                                {user ? user.slice(0, 1) : "ss"}
                            </div>
                            {showUser && < LoggedUser /> }
                        </div>
                        <div className='theme-toggle__slider'>
                            <img className={`toggled-${toggleValue.themeReducer ?  "morty" : "rick"}`} onClick={toggler} width="48px" src={`icon-${toggleValue.themeReducer ?  "morty" : "rick"}.png`} alt="theme-toggler"></img>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>

        </header>
    )
}