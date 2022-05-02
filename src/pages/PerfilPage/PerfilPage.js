import React from "react"
import styled from "styled-components"
import Footer from "../../components/Footer/Footer"
import { useHistory } from "react-router-dom"
import { DivFooter, Body, ContainerAll, Wrap, HeaderContainer, Container } from "./styled"
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header/Header"

const PerfilPage = () => {
    const history = useHistory()
    useProtectedPage()
    return (
        <Body>
            <ContainerAll>
                <Wrap>
                    <div id="Wrap">
                        <HeaderContainer>
                            <Header />
                            <h1>Perfil Page</h1>
                        </HeaderContainer>
                        <Container>

                        </Container>
                        <div id="WrapMainContainer">
                            <div id="WrapMain">
                                <div>

                                </div>
                                <DivFooter>
                                    <Footer />
                                </DivFooter>
                            </div>
                            <DivFooter>
                                <Footer
                                    history={history}
                                />
                            </DivFooter>
                        </div>
                    </div>
                </Wrap>

            </ContainerAll>
        </Body>

    )
}

export default PerfilPage;