import React from "react";
import {Card, Img, Title, Time} from './style'
import styled from "styled-components";
import {goToRestaurante} from '../../router/coordinator'
import { useHistory } from 'react-router-dom';




const CardRest = (props)=>{
    const history = useHistory()
    return(
        <div >
            {/* <Card onClick={()=> {props.det}}>
            <Img>
                <img src={props.logo} alt={props.name}/>
            </Img>
            <Title>
                <h1>{props.name}</h1>
            </Title>
            <Time>
                <p>{props.time}min</p>
                <p>Frete R${props.valor},00</p>
            </Time>
            </Card> */}
        </div>
    )
}
export default CardRest