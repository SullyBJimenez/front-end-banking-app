import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';

import  {Home}  from "./home";
import { CreateAccount } from "./createaccount";
import { Login } from "./login";
import { Deposit } from "./deposit";
import { Withdraw } from "./withdraw";
import { AllData } from "./alldata";
import { NavBar } from "./navbar";

export const UserContext   = React.createContext(null);


export function Spa(){
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/home" exact           Component={Home}/>
                    <Route path="#/createaccount/" exact   component={CreateAccount}/>
                    <Route path="/login/"        exact    element={<Login />}/>
                    <Route path="/deposit/"     exact    element={<Deposit/>}/>
                    <Route path="/withdraw/"    exact    element={<Withdraw/>}/>
                    <Route path="/alldata/"     exact    element={<AllData/>}/>
                </Routes>
        </BrowserRouter>
    );
}
