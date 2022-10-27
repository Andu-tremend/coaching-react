import React from "react";
import users from "../../Login/users";
import { useNavigate } from "react-router-dom";


export default function LoggedUser() {

    const navigate = useNavigate();

    // Work on this one
    function LogOut() {
        localStorage.removeItem('user')
        navigate("/login");
    }
   
    const cookie = () => {
        const cookie: any = localStorage.getItem("user")
        const parsedCookie = JSON.parse(cookie);
        return parsedCookie
    }

    const user = cookie();
    
    if (user) { return (

        <div className="user__wrapper">
            <div className="user__avatar">
                <img src={users.avatar.url} alt={users.avatar.title} />
            </div>
            <div className="user__name">
                <p>Username: {user.username}</p>
                <p>Name: {users.name} {users.lastname}
                </p>
            </div>
            <button onClick={() => {LogOut()}}>Log out</button>
        </div>
        
    ) 
    } else {
        return (
            <div>
                You need to login to see
            </div>
        )
    }

}