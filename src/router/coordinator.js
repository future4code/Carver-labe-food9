export const goToSignUp = (history)=>{
    history.push('/signup')
}

export const goToHome = (history)=>{
    history.push('/')
}


export const goToLogin = (history)=>{
    history.push('/login')

export const goToRestaurante = (history, id)=>{
    history.push(`/restaurant/${id}`)

}