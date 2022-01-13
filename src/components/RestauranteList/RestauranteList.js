import React, {useContext} from "react"
import GlobalContext from "../../context/GlobalContext";
import { useHistory } from 'react-router-dom'
import { goToDetails } from "../../router/coordinator";

const RestauranteList = () => {
    const { restaurante, setRestaurante } = useContext(GlobalContext)

    const history = useHistory();
    return (
        <div>
            {restaurante && restaurante.map((i) => {
                return (
                    <div>
                        <p>{i.name}</p>
                        <img src={i.logoUrl} onClick={() => { goToDetails(history, i.id) }}></img>
                        <p>Tempo de entrega: {i.deliveryTime} minutos</p>
                    </div>
                );
            })}
        </div>
    )
}

export default RestauranteList;