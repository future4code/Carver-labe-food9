import React from "react"
import axios from "axios"
import url from '../../constants/URL_BASE'
import useForm from "../../hooks/useForm"
import { useHistory } from 'react-router-dom';
import logo from '../../Images/logo-future.png'
import { DivPai, H1, Img, Title } from "./styled"
import FormSingUp from '../../components/FormSingUp/FormSingUp';
import { goToAddress, goToHome } from '../../router/coordinator'
import { signUp } from '../../services/User'

const SignUpPage = () => {

    const { formulario, onChange, limpa } = useForm({
        name: '',
        cpf: '',
        email: '',
        password: ''
    })
    const history = useHistory()

    const postSignUp = (formulario, history, limpa ) => {
        axios.post(`${url}/signup`, formulario)
            .then((res) => {
                console.log('cadastrou')
                localStorage.setItem('token-login', res.data.token)
                goToAddress(history)
                limpa()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const createUser = (e) => {
        e.preventDefault()
        postSignUp(formulario, history, limpa)

        const { name, email, cpf, password } = formulario
        if (name.trim() !== '' && cpf.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
            postSignUp(formulario, history)
            limpa()
        } else {
            alert('erro')
        }
    }


    return (
        <DivPai>
            <Img>
                <img src={logo} />
            </Img>
            <Title>
                <H1>Cadastrar</H1>
            </Title>
            <FormSingUp
                submit={createUser}
                nameValue={formulario.name}
                cpfValue={formulario.cpf}
                emailValue={formulario.email}
                passwordValue={formulario.password}
                change={onChange}
            />
        </DivPai>
    )
}

export default SignUpPage;