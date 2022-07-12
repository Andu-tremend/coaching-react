import store from '../Store/store';
import users from '../Login/users';
import { useState } from 'react';


export default function Login() {

   const [inputVal, setInputVal] = useState({
        username: "",
        password: ""
       
   })

   
    let loggedIn;

    function handleSubmit(event) {
        event.preventDefault();     
        
        if (users.username == inputVal.username && users.password == inputVal.password ) {
            console.log("logged");
            return loggedIn = true
        } else {
            console.log("mai incearca");
            return loggedIn = false
        };

        
    }

    
    function handleChange(inputType) {
        
        setInputVal((elem) => {
            return {
                ...elem,
                [inputType.target.id]: inputType.target.value , 
                
            }
            
        })
    }

   

    return (
        <div className="login-wrapper">
            <form>
                
                <input id='username' 
                    value={inputVal.username} 
                    type="text" 
                    placeholder="User"
                    onChange={(userEvent) => {handleChange(userEvent)}}>
                </input>
                
                <input id='password' 
                    value={inputVal.password} 
                    type="password" 
                    placeholder="Password"
                    onChange={(passwordEvent) => {handleChange(passwordEvent)}}>
                </input>
                
                <button onClick={handleSubmit}>SUBMIT</button>


            </form>
            <div>{loggedIn ? "Logged in succesfuly" : "Username or password inccorect"}</div>

        </div>
    )
}