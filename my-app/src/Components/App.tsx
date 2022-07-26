import Login from './login';
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

import PrivateRoute from './PrivateRoutes/privateRoute';
import Homepage from './Homepage';

export default function App(){

    const cookie = () => {
        const cookie: any = localStorage.getItem("user")
        const parsedCookie = JSON.parse(cookie);
        return parsedCookie
    }


    return (
        <Router>
            <Routes>
                <Route
                    path="/" 
                    element={
                        <PrivateRoute children={<Homepage />}/>
                            }
                    />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )




}