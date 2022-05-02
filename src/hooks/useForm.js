import { useState } from "react";

const useForm = (estado) =>{
    const [formulario, setFormulario] = useState(estado)

    const onChange = (event)=>{
        const {name, value} = event.target
        setFormulario({...formulario, [name]: value})
    }

    const limpa = ()=>{
        setFormulario(estado)
    }

    return {formulario, onChange, limpa}
}

export default useForm