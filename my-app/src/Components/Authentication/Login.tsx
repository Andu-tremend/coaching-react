import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import {loggedIn} from '../../Actions/Actions';
import users from '../../Login/users';
import {useNavigate} from "react-router-dom";

// To be disscussed on coaching session

export default function Login() {

    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState({
            username: "",
            password: ""
    })

    const navigate = useNavigate();

    const isLoggedIn = useSelector((state: any) => state.logedInReducer);

    const loggedUser = JSON.stringify(isLoggedIn);
    localStorage.setItem("user", loggedUser );
    


    if (users.username === isLoggedIn.username && users.password === isLoggedIn.password ) {
        localStorage.setItem('loggedin', "DA");
        navigate("/");
    }   

    
    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();    
        dispatch(loggedIn(inputVal));
    }

    function handleChange(event: any) {
      setInputVal((oldVal) => {
        return {
            ...oldVal,
            [event.target.name]: event.target.value
        }
      })
      
    }

    return (
        <>
            
            <div className='autentification-main-wrapper'>
                <div className='autentification__content-wrapper'>
                    <h1>Please login to access the site</h1>
                    <div className="autentification__login-wrapper">           
                        <form>
                            
                            <input name='username' 
                                value={inputVal.username}
                                type="text" 
                                placeholder="User"
                                onChange={handleChange}>
                            </input>
                            
                            <input name='password' 
                                value={inputVal.password} 
                                type="password" 
                                placeholder="Password"
                                onChange={handleChange}>
                            </input>
                            <button onClick={handleSubmit}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
       </>
    )
}


