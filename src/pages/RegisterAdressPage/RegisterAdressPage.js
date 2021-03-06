import React from 'react';
import axios from 'axios'
import url from '../../constants/URL_BASE'
import logo from '../../Images/logo-future.png'
import { DivPai, H1, Img, Title } from './styled'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router'
import FormRegisterAdress from '../../components/FormRegisterAdress/FormRegisterAdress'
import useProtectedPage from '../../hooks/useProtectedPage';
import { goToHome } from '../../router/coordinator'

const RegisterAdressPage = () => {
    useProtectedPage()

    const token = localStorage.getItem('token-login')
    const history = useHistory()
    const { formulario, onChange, limpa } = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    })

    
        const addAddress = (formulario, history, limpa, goToHome) => {
            axios.put(`${url}/address`, formulario, {
            headers: {
                auth: localStorage.getItem('token-login')
            }
            }).then((res) => {
                localStorage.setItem("token-login", res.data.token)
                window.alert("Seu endereço foi salvo!")
                goToHome(history)
                limpa()
            }).catch((err) => {
                console.log(err)
            })
        }
    

    const onSubmitForm = (e) => {
        e.preventDefault();
        addAddress(formulario, history, limpa, goToHome)
    }

    return (
        <DivPai>
            <Img>
                <img src={logo} />
            </Img>
            <Title>
                <H1>Meu endereço</H1>
            </Title>

            <FormRegisterAdress
                submit={onSubmitForm}
                streetValue={formulario.street}
                numberValue={formulario.number}
                neighbourhoodValue={formulario.neighbourhood}
                stateValue={formulario.state}
                cityValue={formulario.city}
                complementValue={formulario.complement}
                change={onChange}
            />

        </DivPai>
    )
}

export default RegisterAdressPage;