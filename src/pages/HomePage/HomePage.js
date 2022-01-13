import React, { useEffect, useContext, useState, useMemo } from "react"
import GlobalContext from "../../context/GlobalContext";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import axios from "axios";
import url from '../../constants/URL_BASE'
import Header from '../../components/Header/Header'
import { Body, Card, Img, Title, Time, Container, ButtonActive, Buttons, ButtonFilter } from './styled'
import search from '../../Images/search.png'
import Footer from "../../components/Footer/Footer";
import useForm from '../../hooks/useForm'

const DivFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    
`


const HomePage = () => {
    const { restaurante, setRestaurante, getRestaurants } = useContext(GlobalContext)

    // const [restaurante, setRestaurante] = useState()
    // const {formulario, onChange, limpa } = useForm({name:''})
    const [categoria, setCategoria] = useState('')
    const [filtroNome, setFiltroNome] = useState('')
    const [limpaFiltro, setLimpaFiltro] = useState(false)



    const history = useHistory();

    const goToRestaurante = (id) => {
        history.push(`/restaurant/${id}`)
    }


    // PEGA A LISTA DA API
    // const getRestaurantes = () => {
    //     axios.get(`${url}/restaurants`, {
    //         headers: {
    //             auth: localStorage.getItem('token-login')
    //         }
    //     })
    //         .then((res) => {
    //             console.log(res.data.restaurants)
    //             setRestaurante(res.data.restaurants)

    //         })
    //         .catch((err) => {
    //             console.log(err, 'Erro ao carregar')
    //         })
    // }




    // FUNÇÕES
    const onClickCategoria = (cat) => {
        setCategoria(cat)
        setLimpaFiltro(true)
    }

    const onChangeName = (e) => {
        setFiltroNome(e.target.value)
    }

    const Limpa = () => {
        setFiltroNome('')
        setCategoria('')
        setLimpaFiltro(false)
    }



    // FILTROS



    const getCategoria = restaurante && restaurante && (restaurante
        .map((res) => {
            return (
                <ButtonActive onClick={() => onClickCategoria(res.category)}>
                    {res.category}
                    {/* {limpa()} */}
                </ButtonActive>

            )
        }))





    const restaurantes = restaurante && restaurante
        .filter((res) => {
            return res.name.toLowerCase().includes(filtroNome.toLocaleLowerCase())
        })
        .filter((res) => {
            return res.category.toLowerCase().includes(categoria.toLocaleLowerCase())
        })
        .map((rest) => {
            return (
                <Card key={rest.id} onClick={() => goToRestaurante(rest.id)}>
                    <Img>
                        <img src={rest.logoUrl} alt={rest.name} />
                    </Img>
                    <Title>
                        <h1>{rest.name}</h1>
                    </Title>
                    <Time>
                        <p>{rest.deliveryTime}min</p>
                        <p>Frete R$ {rest.shipping},00</p>
                    </Time>
                </Card>
            )
        })



    return (
        <Body>

            <Header />
            <Container>
                <img src={search} alt={'Lupa'} />
                <input onChange={onChangeName} placeholder="Nome do Restaurante" type="text" />
                {/* {limpaFiltro && <button onClick={Limpa}>Limpar</button>} */}
            </Container>

            <Buttons>
                {limpaFiltro && <ButtonFilter onClick={Limpa} >Limpar todo</ButtonFilter>}
                {getCategoria}

            </Buttons>

            <div>
                {restaurantes && restaurantes.length > 0 ? (
                    restaurantes
                ) : (
                    <p>Não existe esse restaurante</p>
                )}
            </div>
            <DivFooter>
                <Footer />
            </DivFooter>

        </Body>
    )
}

export default HomePage;