import React from 'react';
import {Route,BrowserRouter as Router,Routes } from 'react-router-dom';

import SignIn from '../signin/SignIn';
import SignUp from '../signup/SignUp';

function Router1(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<SignIn />} />
                    <Route  path="/signup" element={<SignUp />}/>
                </Routes>
            </Router>
        </div>
    )
}
export default Router1;