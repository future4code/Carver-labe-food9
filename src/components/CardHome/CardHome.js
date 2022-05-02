import React from 'react';
import { useHistory } from 'react-router-dom';
import { RestauranteCard, MainCard, ImgCard, ContainerNome, RestauranteNome, ContainerFrete, RestauranteTempo, RestauranteFrete } from './styled';
import { goToRestaurante } from '../../router/coordinator'

function CardHome (props) {
    const history = useHistory()
    return(
        <RestauranteCard>
            <MainCard onClick={() => goToRestaurante(history, props.restaurante.id)}>
                <ImgCard src={props.restaurante.logoUrl} />
                <ContainerNome>
                    <RestauranteNome>{props.restaurante.name}</RestauranteNome>
                    <ContainerFrete>
                        <RestauranteTempo>{props.restaurante.deliveryTime} min</RestauranteTempo>
                        <RestauranteFrete>Frete R$ {props.restaurante.shipping},00</RestauranteFrete>
                    </ContainerFrete>
                </ContainerNome>
            </MainCard>
        </RestauranteCard>
    )
}

export default CardHome