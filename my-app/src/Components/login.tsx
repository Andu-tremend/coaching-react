import store from '../Store/store';
import users from '../Login/users';
import { ChangeEvent, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loggedIn} from '../Actions/actions'

// To be disscussed on coaching session

export default function Login(this: any) {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state: any) => state.logedInReducer);

    const [inputVal, setInputVal] = useState({
            username: "",
            password: ""
    })


    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();    
        console.log(isLoggedIn)
        if (users.username === isLoggedIn.username && users.password === isLoggedIn.password ) {
            console.log("true")
        } else {
            console.log("false")
        }
    }

    function handleChange(event: any) {
      setInputVal((oldVal) => {
        return {
            ...oldVal,
            [event.target.name]: event.target.value
        }
      })

      dispatch(loggedIn(inputVal))
       console.log(inputVal)
    }

    return (
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
       
    )
}

function logingIn(): any {
    throw new Error('Function not implemented.');
}
