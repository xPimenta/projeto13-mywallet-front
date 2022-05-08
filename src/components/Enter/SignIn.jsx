import React, { useState} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
// import axios from 'axios';
// import { ThreeDots } from 'react-loader-spinner';

import Enter from './Enter';


export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // let navigate = useNavigate();


    function setStateOnChange(event, setStateFunction) {
        setStateFunction(event.target.value);
    }
    
    
    return (
        <Enter>
            <Container>
                <InputsContainer>
                    <Input placeholder="E-mail" value={email} onChange={e => { setStateOnChange(e, setEmail) }}/>
                    <Input type="password" placeholder="Senha" value={password}  onChange={e => { setStateOnChange(e, setPassword) }}/>
                    <SubmitButton>
                        Entrar
                    </SubmitButton>
                </InputsContainer>
                <Clickable>
                    <Link to={"/signup"} >Primeira vez? Cadastre-se!</Link>
                </Clickable>
            </Container>
        </Enter>
    )
}



const Container = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    align-items: center;
`

const InputsContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    gap:13px;
`

const Input = styled.input`
    width: 100%;
    height: 58px;
    border: none;
    border-radius: 5px;
    color: black;
    font-size: 20px;
    padding-left: 15px;
    &::placeholder {}
    &:disabled,
    &[disabled]{}
`

const SubmitButton = styled.button`
    width: 100%;
    height: 46px;
    background-color: var(--purple-light);
    border: none;
    border-radius: 5px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {background-color: var(--purple-light-hover);}
`


const Clickable = styled.div`
    margin-top: 32px;
    a {
        font-size: 15px;
        font-weight: 700;
    }
`


