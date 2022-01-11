import React, {useEffect, useContext, useState} from "react"
import GlobalContext from "../../context/GlobalContext";
import styled from "styled-components";
import axios from "axios";
import url from '../../constants/URL_BASE'
import {Card} from './styled'
import CardRest from "../../components/CardRest/CardRest";

const Body = styled.div`
    max-width: 100%;
    overflow-x: hidden;
`




const HomePage = () => {
    // const {states, setters, requests} = useContext(GlobalContext)

    const [restaurante, setRestaurante] = useState()
    useEffect(()=>{
        getRestaurantes()
    }, [setRestaurante])

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


    console.log(restaurante)


    const copia = restaurante && restaurante &&(
        restaurante.map((rest)=>{
            return(
                
            <CardRest key={rest.id}
                description={rest.description}
                name={rest.name}
                time={rest.deliveryTime}
                logo={rest.logoUrl}
            />
           
            )
        })
    )
    
        
        
    

    return (
        <Body>
        {/* {copia && copia.map((rest)=>{
            return(
                <>
                <Card key={rest.id}>
                <p>{rest.description}</p>
                <p>{rest.name}</p>
        </Card>
                </>
            )
        })} */}
        {/* <Card>
        <p>{description}</p>
        </Card> */}
        <h1>HomePage</h1>
        
        {copia}
        </Body>
    )
}

export default HomePage;