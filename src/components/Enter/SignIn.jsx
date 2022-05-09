import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

import Enter from './Enter';


export default function SignIn() {

    const {token, setToken, APILink} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate('/wallet');
            console.log("TOKEN: ", token);
        }
    },[token]);


    function setStateOnChange(event, setStateFunction) {
        setStateFunction(event.target.value);
    }

    async function logIn() {
        setIsLoading(true)
        try {
            const link = "http://localhost:5000/sign-in";
            const answer = await axios.post(link, {email, password});
            const receivedToken = answer.data;
            localStorage.setItem('mywallet_token', JSON.stringify(receivedToken));
            setToken(receivedToken);
            setIsLoading(false)
        } catch {
            setIsLoading(false)
        }
    }
    
    return (
        <Enter>
            <Container>
                <InputsContainer>
                    <Input placeholder="E-mail" value={email} disabled={isLoading} onChange={e => { setStateOnChange(e, setEmail) }}/>
                    <Input type="password" placeholder="Senha" value={password} disabled={isLoading} onChange={e => { setStateOnChange(e, setPassword) }}/>
                    <SubmitButton disabled={isLoading} onClick={e => logIn()}>
                        {isLoading
                            ? <ThreeDots color="#fff" height={50} width={50} />
                            : "Entrar"}
                    </SubmitButton>
                </InputsContainer>
                <Clickable>
                    {isLoading
                        ? "Pera, estamos checando..."
                        : <Link to={"/sign-up"} >Primeira vez? Cadastre-se!</Link>}
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


