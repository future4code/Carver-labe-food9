import React from "react";
import avatar from '../../Images/perfil-de-usuario.png'
import cart from '../../Images/carrinho-carrinho.png'
import styled from "styled-components";
import home from '../../Images/casa-unica.png'
import {goToHome, goToPerfil, goToCart} from '../../router/coordinator'
import { useHistory } from 'react-router-dom'
import {Div} from './style'


const Footer = ()=>{
    const history = useHistory();
    return(
        <Div>
        <button onClick={()=>goToHome(history)}><img src={home} alt={'home'}/></button>
        <button onClick={()=> goToCart(history)}><img src={cart} alt={'cart'}/></button>
        <button onClick={()=> goToPerfil(history)}><img src={avatar} alt={'avatar'}/></button>
        </Div>
    )
}
export default Footer