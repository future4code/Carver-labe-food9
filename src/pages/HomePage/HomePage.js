import React, { useContext, useState } from "react"
import GlobalContext from "../../context/GlobalContext";
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { Body, Container, ButtonActive, Buttons, ButtonFilter, DivFooter } from './styled'
import search from '../../Images/search.png'
import Footer from "../../components/Footer/Footer";
import useProtectedPage from "../../hooks/useProtectedPage";
import CardHome from "../../components/CardHome/CardHome"

const HomePage = () => {
    useProtectedPage()

    const { restaurante, setRestaurante, getRestaurants } = useContext(GlobalContext)

    const [categoria, setCategoria] = useState('')
    const [filtroNome, setFiltroNome] = useState('')
    const [limpaFiltro, setLimpaFiltro] = useState(false)

    const history = useHistory();

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
        .map((restaurante) => {
            return (
                <CardHome restaurante={restaurante}/>
            )
        })

    return (
        <Body>

            <Header />
            <Container>
                <img src={search} alt={'Lupa'} />
                <input onChange={onChangeName} placeholder="Nome do Restaurante" type="text" />
            </Container>

            <Buttons>
                {limpaFiltro && <ButtonFilter onClick={Limpa} >Todos</ButtonFilter>}
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