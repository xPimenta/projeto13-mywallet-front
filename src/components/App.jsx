import React, { useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";

import SignIn from "./Enter/SignIn";
import SignUp from "./Enter/SignUp";

export default function App() {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const APILink = "http://localhost:5000/";


  return (
    <UserContext.Provider value={{ user, setUser, token, setToken, APILink }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
