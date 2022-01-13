import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../constants/URL_BASE'
import GlobalContext from './GlobalContext'


const GlobalState = (props) => {
    const [restaurante, setRestaurante] = useState([])
    const [restaurantDetail, setRestaurantDetail] = useState([]);
    const [user, setUser] = useState({});
    const [address, setAddress] = useState({});
    const [addCart, setAddCart] = useState([])
    const [itemsAmount, setItensAmount] = useState(0)
    const [resInfo, setResInfo] = useState({})
    const [cart, setCart] = React.useState({
        products: [],
        paymentMethod: '',
      });

    useEffect(() => {
        getRestaurants();
    }, [setRestaurante]);

    const getRestaurants = () => {
        axios
            .get(`${url}/restaurants`, {
                headers: {
                    auth: localStorage.getItem('token-login')
                },
            })
            .then((res) => {
                console.log(res.data.restaurants)
                setRestaurante(res.data.restaurants);
            })
            .catch((error) => console.log(error));
    };

    const getRestaurantDetail = (id) => {
        axios
            .get(`${url}/restaurants/${id}`, {
                headers: {
                    auth: localStorage.getItem('token-login')
                },
            })
            .then((response) => {
                console.log(response);
                setRestaurantDetail(response.data.restaurant);
            })
            .catch((error) => console.log(error));
    };

    const getFullAddress = () => {
        ;
        axios
            .get(`${url}/perfil/address`, {
                headers: {
                    auth: localStorage.getItem('token-login')
                },
            })
            .then((response) => {
                console.log(response);
                setAddress(response.data.address);
            })
            .catch(
                (error) => console.log(error)
            );
    };

    const getProfile = () => {
        axios
            .get(`${url}/perfil`, {
                headers: {
                    auth: localStorage.getItem('token-login')
                },
            })
            .then((response) => {
                console.log(response.data.user);
                setUser(response.data.user);
            })
            .catch((error) => console.log(error.message));
    };

    const getActiveOrder = () => {
        axios
            .get(`${url}/cart`, {
                headers: {
                    Authorization: localStorage.getItem("token-login"),
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log(error.message));
    };

    const getOrdersHistory = () => {
        axios
            .get(`${url}/cart`, {
                headers: {
                    Authorization: localStorage.getItem("token-login"),
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log(error.message));
    };

    // const states = {
    //   restaurante,
    //   restaurantDetail,
    //   user,
    //   address,
    // };
    // const setters = {
    //   setRestaurante,
    //   setRestaurantDetail,
    //   setUser,
    //   setAddress,
    // };
    // const requests = {
    //   getRestaurants,
    //   getRestaurantDetail,
    //   getFullAddress,
    //   getProfile,
    //   getActiveOrder,
    //   getOrdersHistory,
    // };

    // const data = {requests, states, setters}
    const data = { restaurante, restaurantDetail, getRestaurants, addCart, setAddCart, setItensAmount, resInfo, setResInfo };

    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState