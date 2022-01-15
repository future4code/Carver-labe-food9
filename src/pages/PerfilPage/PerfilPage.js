import React from "react"
import styled from "styled-components"
import Footer from "../../components/Footer/Footer"
import { useHistory } from "react-router-dom"
import { DivFooter } from "./styled"
import useProtectedPage from "../../hooks/useProtectedPage";

const PerfilPage = () => {
    const history = useHistory()
    useProtectedPage()
    return (
        <div>
        <h1>Perfil Page</h1>
        <DivFooter>
        <Footer
                history={history}
            />
            </DivFooter>
            </div>
    )
}

export default PerfilPage;