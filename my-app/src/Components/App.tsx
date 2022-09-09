import Login from './Login';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import Homepage from './Home/Homepage';
import Draw from './Draw/Draw';

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
                    <Route path="/draw" element={<Draw />} />
                </Routes>

            </Router>
    )




}