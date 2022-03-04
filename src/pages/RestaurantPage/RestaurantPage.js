import React, { useEffect, useState, useContext } from "react"
import { useParams, useHistory } from "react-router";
import url from '../../constants/URL_BASE'
import axios from "axios";
import CardDeta from "../../components/CardDeta/CardDeta";
import CardMenu from "../../components/CardMenu/CardMenu";
import { Titulo, DivFooter, Body, ContainerAll, Wrap, HeaderContainer, Container, Buttons } from './styled'
import GlobalContext from "../../context/GlobalContext";
import Footer from "../../components/Footer/Footer"
import useProtectedPage from "../../hooks/useProtectedPage";





const RestaurantPage = () => {
    useProtectedPage()
    const [data, setData] = useState({ restaurant: {} })
    const params = useParams()
    const { resInfo, setResInfo } = useContext(GlobalContext)
    const history = useHistory()

    useEffect(() => {
        getRestaurantes()
    }, [])

    const categorias = data.restaurant && data.restaurant.products && data.restaurant.products.map((prod) => {
        return prod.category
    })

    const filtro = categorias && categorias.filter((item, i) => {
        return categorias.indexOf(item) === i
    })

    const produtos = (item, i) => {
        const array = i.filter((it) => it.category === item)
        const card = array.map((produ) => {
            return (
                <CardMenu key={Math.random()} restaurantId={params.id} product={produ} />

            )
        })

        return (
            <div>
                <Titulo>
                    {item}
                </Titulo>
                <hr></hr>
                {card}
            </div>
        )
    }


    const lista = filtro && filtro.map((cate) => {
        return produtos(cate, data.restaurant.products)
    })



    const getRestaurantes = () => {
        axios.get(`${url}/restaurants/${params.id}`, {
            headers: {
                auth: localStorage.getItem('token-login')
            }
        })
            .then((res) => {
                // setRestaurante(res.data)
                setResInfo(res.data.restaurant)
                setData(res.data)
            })
            .catch((err) => {
                alert(err, 'Erro ao carregar')
            })
    }

    return (
        <Body>
            <ContainerAll>
                <Wrap>
                    <div id="Wrap">
                        <HeaderContainer>
                        <CardDeta restaurant={data && data.restaurant} />
                        </HeaderContainer>
                        <Container>

                        </Container>
                        <Buttons>

                        </Buttons>
                        <div id="WrapMainContainer">
                            <div id="WrapMain">
                                <div>
                                {lista}
                                </div>
                            </div>
                        </div>
                        
                        
                        <DivFooter>
                            <Footer
                                history={history}
                            />
                        </DivFooter>
                    </div>
                </Wrap>
            </ContainerAll>
        </Body>
    )
}

export default RestaurantPage;