import Login from './Authentication/Login';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import Homepage from './Home/Homepage';
import Draw from './Draw/Draw';
import Notes from './Notes/Notes'
import Character from './Home/IndividualCharacters/Character';

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
                    <Route path="/notes" element={<Notes />} />
                    <Route path="/:userId" element={<Character />} />
                </Routes>

            </Router>
    )




}