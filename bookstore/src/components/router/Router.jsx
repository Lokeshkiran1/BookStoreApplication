import React from 'react';
import {Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import DashBoard from '../../pages/dashboard/Dashboard';
import Lander from '../../pages/lander/Lander';
import MyCart from '../mycart/MyCart';
import OrderSuccess from '../ordersuccess/OrderSuccess';

import SignIn from '../signin/SignIn';
import SignUp from '../signup/SignUp';

function Router1(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Lander />} />
                    <Route  path="/signup" element={<SignUp />}/>
                    <Route path="/dashboard" element={<DashBoard />}/>
                    <Route path="/myCart" element={<MyCart />} />
                    <Route path="/ordersuccess" element={<OrderSuccess />} />
                </Routes>
            </Router>
        </div>
    )
}
export default Router1;