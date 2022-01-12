export const goToSignUp = (history)=>{
    history.push('/signup')
}

export const goToHome = (history)=>{
    history.push('/')
}

export const goToRestaurante = (history, id)=>{
    history.push(`/restaurant/${id}`)
}