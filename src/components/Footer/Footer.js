import React from "react";
import avatar from '../../Images/avatar.png'
import home from '../../Images/homepage.png'
import cart from '../../Images/shopping-cart.png'
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css'
// import {goToHome, goToPerfil, goToCart} from '../../router/coordinator'
import { useHistory } from 'react-router-dom'


const Div = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    height: 55px;

    button{
        background-color: transparent;
        border-style: hidden;
        cursor: pointer;


        img{
            width: 2rem;
            height: 2rem;
            color: gray;
            
        }
    }
`


// const goToHome = (history)=>{
//     history.push('/')

// }

// const goToPerfil = (history)=>{
//     history.push('/perfil')
// }

// const goToCart = (history)=>{
//     history.push('/cart')
// }



const Footer = ()=>{
    const history = useHistory();
    return(
        <Div>
        <button ><img src={home} alt={'home'}/></button>
        <button ><img src={cart} alt={'cart'}/></button>
        <button ><img src={avatar} alt={'avatar'}/></button>
        </Div>
    )
}
export default Footer