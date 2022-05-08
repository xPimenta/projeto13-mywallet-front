import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import SignIn from './Enter/SignIn';
import SignUp from './Enter/SignUp';


export default function App() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
    )
}