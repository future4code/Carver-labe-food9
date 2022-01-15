import React, { useContext, useState } from "react"
import OptionQntd from '../FileInput/OptionQnt'
import GlobalContext from "../../context/GlobalContext";

const ModalCom = (props)=> {
    const { newCart } = useContext(GlobalContext)
    const [qntd, setQntd] = useState(1)
    const handleQntd = (e)=>{
        setQntd(e.target.value)
    }

    return(
        <div>
            <button onClick={props.close}>x</button>
            <div>
                <h2 id="simple-modal-title">Selecione</h2>
                <select onChange={handleQntd}>
                <OptionQntd />
                </select>
                <button onClick={()=> {newCart(props.product, qntd, props.resId)}}>Acicionar ao carrinho</button>
            </div>
        </div>
    )
}
    export default ModalCom