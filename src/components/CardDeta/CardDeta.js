import React from "react";
import styled from "styled-components";
import {Pai, Img, Info, Time, Tempo, Add} from './style'




const CardDeta = ({restaurant})=>{
    return(
        <Pai>
            <Img src={restaurant.logoUrl}/>
            <Info>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.category}</p>
            <Time>
            <Tempo>
            <p>{restaurant.deliveryTime - 10} - {restaurant.deliveryTime}min</p>
            </Tempo>
            <div>
            <p>R${restaurant.shipping},00</p>
            </div>
            </Time>
            
            </Info>
            <Add>
            <p>{restaurant.address}</p>
            </Add>
        </Pai>
    )
}
export default CardDeta