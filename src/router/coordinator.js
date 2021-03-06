export const goToSignUp = (history)=>{
    history.push('/signup')
}

export const goToHome = (history)=>{
    history.push('/')
}


export const goToLogin = (history)=>{
    history.push('/login')

}

export const goToPerfil = (history)=>{
    history.push('/perfil')
}

export const goToCart = (history)=>{
    history.push('/cart')
}

export const goToAddress= (history)=>{
    history.push('/address')
}

export const goToRestaurante = (history, id) => {
    history.push(`/restaurant/${id}`)
}