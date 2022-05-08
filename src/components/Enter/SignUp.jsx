import React, { useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

import Enter from './Enter';

export default function SignUp({}) {
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    let navigate = useNavigate();


    function setStateOnChange(event, setStateFunction) {
        setStateFunction(event.target.value);
    }

    async function signUp() {
        setIsLoading(true)
        try {
            const link = "mongodb://localhost:27017/sign-up"
            const answer = await axios.post(link, {username, email, password, repeatPassword});
            navigate('/');
            setIsLoading(false)
        } catch {
            console.log("error");
            setIsLoading(false)
        }
    }

    function setStateOnChange(event, setStateFunction) {
        setStateFunction(event.target.value);
    }

    
    return (
        <Enter>
            <Container>
                <InputsContainer>
                    <Input placeholder="Nome" value={username} disabled={isLoading} onChange={e => { setStateOnChange(e, setUsername) }}/>
                    <Input placeholder="E-mail" value={email} disabled={isLoading} onChange={e => { setStateOnChange(e, setEmail) }}/>
                    <Input type="password" placeholder="Senha" value={password} disabled={isLoading} onChange={e => { setStateOnChange(e, setPassword) }}/>
                    <Input type="password" placeholder="Confirme a senha" value={repeatPassword} disabled={isLoading} onChange={e => { setStateOnChange(e, setRepeatPassword) }}/>
                    <SubmitButton disabled={isLoading} onClick={e => signUp()}>
                        {isLoading
                            ? <ThreeDots color="#fff" height={50} width={50} />
                            : "Entrar"}
                    </SubmitButton>
                </InputsContainer>
                <Clickable>
                    <Link to={"/"} >Já tem uma conta? Entre agora!</Link>
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
    display:flex;
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



