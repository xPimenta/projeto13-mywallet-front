import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import SignIn from './Enter/SignIn';


export default function App() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
    )
}