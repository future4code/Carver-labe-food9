
import React, { useState, useEffect } from "react";
import axios from "axios";
import url from '../constants/URL_BASE'
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
    const [restaurante, setRestaurante] = useState([])
    const [restaurantDetail, setRestaurantDetail] = useState([]);
    const [activeOrder, setActiveOrder] = useState({})
    const [user, setUser] = useState({});
    const [address, setAddress] = useState({});
    const [addCart, setAddCart] = useState([])
    const [itemsAmount, setItensAmount] = useState(0)
    const [resInfo, setResInfo] = useState({})
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, [setRestaurante]);

    useEffect(() => {
      if (cart && cart.length > 0) { 
          localStorage.setItem("cart", JSON.stringify(cart))
      } else if (cart.length <= 0 && localStorage.getItem("cart") && localStorage.getItem("cart").length) {
          setCart(JSON.parse(localStorage.getItem("cart")))
      }
  }, [cart])

    const getRestaurants = () => {
    axios
      .get(`${url}/restaurants`, {
        headers: {
                        auth: localStorage.getItem('token-login')
                    },
      })
      .then((res) => {
        
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
        
        setRestaurantDetail(response.data.restaurant);
      })
      .catch((error) => console.log(error));
  };


  const newCart = (product, qntd, resID) => {

    const cartProduct = {}

    cartProduct.product = product
    cartProduct.qnt = qntd
    cartProduct.resID = resID


    setCart([...cart, cartProduct])

}

  const getFullAddress = () => {;
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
        
        setUser(response.data.user);
      })
      .catch((error) => console.log(error.message));
  };

  const getActiveOrder = () => {
    axios
      .get(`${url}/active-order`, {
        headers: {
          auth: localStorage.getItem("token-login"),
        },
      })
      .then((response) => {
        
        setActiveOrder(response.data.order)
      })
      .catch((error) => console.log(error.response.data));
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


  const removeCart = (id) => {
    let novaLista = [...cart]
    for (let i = 0; i < novaLista.length; i++) {
        if (novaLista[i].product.id === id) {
            if (novaLista.length === 1) {
                setCart([])
                localStorage.removeItem('cart')
            }
            novaLista.splice(i, 1)
            setCart(novaLista)
        }
    }
}


 
    const data = { restaurante, restaurantDetail, getRestaurants, addCart, setAddCart, setItensAmount, resInfo, setResInfo, getActiveOrder, cart, setCart, newCart, removeCart, activeOrder, getProfile, user, setUser, restaurantDetail, getRestaurantDetail };

    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState
