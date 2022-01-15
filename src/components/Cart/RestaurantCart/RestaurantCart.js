import React, { useContext, useEffect } from 'react'
import GlobalContext from "../../../context/GlobalContext"


function RestaurantCart(props) {
    const {getRestaurantDetail,restaurantDetail} = useContext(GlobalContext)
    useEffect(() => {
        getRestaurantDetail(props.id)
    }, [])

    if(restaurantDetail.restaurant){
        props.shippingPrice(restaurantDetail.restaurant.shipping)
    }

    return (
        
        <div>
            {restaurantDetail.restaurant && (
                <div>
                    <h3>{restaurantDetail.restaurant.name}</h3>
                    <div>
                        <p>{restaurantDetail.restaurant.deliveryTime} min</p>
                        <p>Frete R${restaurantDetail.restaurant.shipping}</p>
                    </div>
                    <p>{restaurantDetail.restaurant.address}</p>
                </div>
            ) }

        </div>
    )
}

export default RestaurantCart