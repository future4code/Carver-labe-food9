import React, { useEffect, useState, useContext } from "react"
import { useParams, useHistory } from "react-router";
import url from '../../constants/URL_BASE'
import axios from "axios";
import CardDeta from "../../components/CardDeta/CardDeta";
import CardMenu from "../../components/CardMenu/CardMenu";
import styled from "styled-components";
import {Titulo} from './styled'
import GlobalContext from "../../context/GlobalContext";




const RestaurantPage = () => {
    const [data, setData] = useState({ restaurant: {} })
    const params = useParams() 
    // const [restaurante, setRestaurante] = useState([])
    const {resInfo, setResInfo} = useContext(GlobalContext)

    useEffect(()=>{
        getRestaurantes()
    }, [])

    const categorias = data.restaurant && data.restaurant.products && data.restaurant.products.map((prod)=>{
        return prod.category
    })

    const filtro = categorias && categorias.filter((item, i)=>{
        return categorias.indexOf(item) === i
    })

    const produtos = (item, i)=>{
        const array = i.filter((it)=> it.category === item)
        const card = array.map((produ)=>{
            return (
            <CardMenu key={produ.id} product={produ}/>
            
            )
        })
        
        return(
            <div>
            <Titulo>
                {item}
                </Titulo>
                <hr></hr>
                {card}
                </div>
        )
    }


    const lista = filtro && filtro.map((cate)=>{
        return produtos(cate, data.restaurant.products)
    })



    const getRestaurantes = ()=>{
        axios.get(`${url}/restaurants/${params.id}`, {
            headers:{
                auth: localStorage.getItem('token-login')
            }
        })
        .then((res)=>{
            console.log(res.data)
            // setRestaurante(res.data)
            setResInfo(res.data.restaurant)
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err, 'Erro ao carregar')
        })
    }

    return (
        <div>
        <CardDeta restaurant={data && data.restaurant}/>
        {lista}
        
        </div>
    )
}

export default  RestaurantPage;