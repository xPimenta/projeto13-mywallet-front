import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Exit(){
    const navigate = useNavigate()
    const [exit, setExit] = useState({value: "", description: ""})
    return(
        <div>
            <Title>Nova saída</Title>
        <Forms>
            <form onSubmit={createExit}>
                <input onChange={(e) => setExit({...exit, value: e.target.value})} placeholder="Valor" step="any" type="number"/>
                <input onChange={(e) => setExit({...exit, description: e.target.value})} maxLength="15" placeholder="Descrição" type="text"/>
                <SubmitButton type="submit"/>
            </form>
        </Forms>
        </div>
    )
    function createExit(e) {
        e.preventDefault()
        const promise = axios.post("https://projeto13-mywallet-back-mp.herokuapp.com/new-exit", exit, {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        promise.then(() => {
            navigate("/menu")
        })
        promise.catch(() => {
            alert("Preencha corretamente!")
        })
    }
}


const Forms = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: auto;
    form{
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        align-items: center;
        input{
            margin-bottom: 10px;
            border: 0
        }
    }
`

const SubmitButton = styled.input`
    background-color: #A328D6;
    color: #ffffff;
    font-weight: 700;
    border: 0
`
const Title = styled.h1`
    margin: 25px 0 0 24px;
    color: #ffffff;
    font-size: 26px;
    font-weight: 700;
`