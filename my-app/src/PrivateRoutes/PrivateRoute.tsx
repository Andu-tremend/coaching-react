import {useEffect} from "react";
import { Navigate } from "react-router-dom";


 const PrivateRoute = ({children}:any) => {
    const admin = localStorage.getItem("loggedin")
    return admin === "DA" ? children : <Navigate to="/login" />
}

export default PrivateRoute;