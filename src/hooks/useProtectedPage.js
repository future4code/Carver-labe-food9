import {useHistory} from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToLogin } from '../router/coordinator'

const useProtectedPage = () => {
    const history = useHistory();

    useLayoutEffect(()=>{
        const token = localStorage.getItem('token-login');
        if (!token) {
            goToLogin(history)
        }

    })

}

export default useProtectedPage;