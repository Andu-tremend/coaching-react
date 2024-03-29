
import {useSelector, useDispatch} from 'react-redux';
import {toggleAction} from '../../Actions/Actions'
import LoggedUser from '../Authentication/LoggedUser';
import { useState, useContext } from 'react';
import {testContext} from '../../Context/Context';



export default function Header() {

    const contextVal = useContext(testContext)

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