import React, {useEffect, useContext, useState} from "react"
import GlobalContext from "../../context/GlobalContext";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import axios from "axios";
import url from '../../constants/URL_BASE'
import CardRest from "../../components/CardRest/CardRest";
import Header from '../../components/Header/Header'
import Filter from '../../components/Filter/Filter'
import {Body, Card, Img, Title, Time} from './styled'







const HomePage = () => {
    // const {states, setters, requests} = useContext(GlobalContext)

    const [restaurante, setRestaurante] = useState()
    useEffect(()=>{
        getRestaurantes()
    }, [setRestaurante])

    const history = useHistory();

    const goToRestaurante = (id)=>{
        history.push(`/restaurant/${id}`)
    }

    const getRestaurantes = ()=>{
        axios.get(`${url}/restaurants`, {
            headers:{
                auth: localStorage.getItem('token-login')
            }
        })
        .then((res)=>{
            console.log(res.data.restaurants)
            setRestaurante(res.data.restaurants)
            
        })
        .catch((err)=>{
            console.log(err, 'Erro ao carregar')
        })
    }



    // const copia = restaurante && restaurante &&(
    //     restaurante.map((rest)=>{
    //         return(
                
    //         <CardRest key={rest.id}
    //             valor={rest.shipping}
    //             name={rest.name}
    //             time={rest.deliveryTime}
    //             logo={rest.logoUrl}
    //             id={rest.id}
    //             det={()=> goToRestaurante(rest.id)}
    //         />
           
           
    //         )
    //     })
    // )

    const copia1 = restaurante && restaurante &&(
        restaurante.map((rest)=>{
            return(
                <Card key={rest.id} onClick={()=> goToRestaurante(rest.id)}>
                <Img>
                <img src={rest.logoUrl} alt={rest.name}/>
                </Img>
                <Title>
                    <h1>{rest.name}</h1>
                </Title>
                <Time>
                <p>{rest.deliveryTime}min</p>
                <p>Frete R${rest.shipping},00</p>
                </Time>
                </Card>
            )}))
    
        
        
    

    return (
        <Body>
        
        <Header/>
        <Filter/>
        {copia1}
        </Body>
    )
}

export default HomePage;