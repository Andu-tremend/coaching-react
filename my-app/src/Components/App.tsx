import Login from './Login';
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import Homepage from './Homepage';
export default function App(){

    const contextTest = {
        title: "Title value from context"
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