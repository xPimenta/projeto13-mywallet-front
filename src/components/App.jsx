import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';
import axios from 'axios';

import SignIn from './Enter/SignIn';
import SignUp from './Enter/SignUp';
import Wallet from './Wallet/Wallet';


export default function App() {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const APILink = "http://localhost:5000/";

    useEffect(()=>{
        if (!token) {
            const download = JSON.parse(localStorage.getItem('mywallet_token'));
            if (download) {
                setToken(download);
            }
        }
    }, [])

    return (
        <UserContext.Provider value={{user, setUser, token, setToken, APILink}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/wallet" element={<Wallet />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}
