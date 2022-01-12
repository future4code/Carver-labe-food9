import GlobalContext from './GlobalContext'
import url from '../constants/URL_BASE'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


const GlobalState = (props)=>{

    // useEffect(()=>{
    //     getRestaurantes()
    // }, [])

    const [restaurante, setRestaurante] = useState([])


    const getRestaurantes = ()=>{
        axios.get(`${url}/restaurants`, {
            headers:{
                auth: localStorage.getItem('token-login')
            }
        })
        .then((res)=>{
            console.log(res.data)
            setRestaurante(res.data)
            
        })
        .catch((err)=>{
            console.log(err, 'Erro ao carregar')
        })
    }



    const requests = {getRestaurantes}
    const states = {restaurante}
    const setters = {setRestaurante}

    const data = {requests, states, setters}

    return(
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState