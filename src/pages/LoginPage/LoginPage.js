import React, { useEffect } from "react"
import logo from '../../Images/logo-future.png'
import axios from "axios"
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router-dom"
import { DivPai, Img, Title, H1, Form, Button, Body1, ContainerAll, Wrap, HeaderContainer } from './styled'
import url from '../../constants/URL_BASE'
import { goToHome, goToSignUp } from '../../router/coordinator'


const LoginPage = () => {

    const { formulario, onChange, limpa } = useForm({
        email: '',
        password: ''
    })

    const history = useHistory()


    const enviar = (e) => {
        e.preventDefault()

        axios.post(`${url}/login`, formulario)
            .then((res) => {

                localStorage.setItem('token-login', res.data.token)
                goToHome(history)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }



    return <Body1>
        
            <ContainerAll>
                <Wrap>
                    <div id="Wrap">
                        <HeaderContainer>
                            <img src={logo} />
                        </HeaderContainer>
                        <Title>
                            <H1>Entrar</H1>
                        </Title>
                        <div id="WrapMainContainer">
                            <div id="WrapMain">
                                <div>
                                    <Form onSubmit={enviar}>

                                        <input placeholder='E-mail' type='email'
                                            name={'email'}
                                            value={formulario.email}
                                            onChange={onChange}
                                            required></input>

                                        <input placeholder='Senha' type='password'
                                            name={'password'}
                                            value={formulario.password}
                                            onChange={onChange}
                                            pattern={'^.{6,}'}
                                            title="Sua senha deve ter no mínimo 6 caracteres"
                                            required></input>

                                        <button>Entrar</button>


                                    </Form>
                                    <Button onClick={() => goToSignUp(history)}>Não possui cadastro? Clique aqui.</Button>

                                </div>

                            </div>

                        </div>


                    </div>
                </Wrap>
            </ContainerAll>
         </Body1>
    
}

export default LoginPage;