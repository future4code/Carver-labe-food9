import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../context/GlobalContext";
import {Pai, Img, Description, Button} from './style'




const CardMenu = ({product})=>{

    const{addCart, setAddCart, setItemsAmount, resInfo, setResInfo} = useContext(GlobalContext)

    const addToCart = (item)=>{
        const index = addCart.findIndex((it)=>{
            return it.id === item.id
        })
    const newCart = [...addCart]
    
    if(index === -1){
        newCart.push({...item, amount: 1})
    }else{
        newCart[index].amount += 1
    }

    setAddCart(newCart)

    setItemsAmount(newCart.amount)

    setResInfo({...resInfo})

    }

    const currency = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    console.log('card', product)
    return(
        <Pai>
            <Img src={product.photoUrl}/>
            <Description>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>{ currency.format(product.price)}</h3>
            <Button onClick={()=> addToCart(product)}>Adicionar</Button>
            </Description>
            
        </Pai>
    )
}
export default CardMenu