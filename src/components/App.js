import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./GlobalStyles"
import SignUp from "./SignUp"
import Login from "./Login"
import Menu from "./Menu"
import Entry from "./Entry"
import Exit from "./Exit"


export default function App(){
    return(
        <BrowserRouter>
        <GlobalStyle/>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/new-entry" element={<Entry/>}/>
                <Route path="/new-exit" element={<Exit/>}/>
            </Routes>
        </BrowserRouter>
    )
}

