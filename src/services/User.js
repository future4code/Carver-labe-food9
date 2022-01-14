import url from '../constants/URL_BASE'
import axios from 'axios'
import { goToAddress } from '../router/coordinator'

export const signUp = (body, limpa, history) => {
    axios
        .post(`${url}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            window.alert("Cadastro efetuado com sucesso!")
            limpa()
            goToAddress(history)
        })
        .catch((err) => {
            window.alert(err.response.data.message)
        })
}