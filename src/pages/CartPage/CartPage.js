
import React, { useContext, useLayoutEffect, useState } from 'react';
import GlobalContext from "../../context/GlobalContext";
import axios from "axios";
import url from '../../constants/URL_BASE'
import RestaurantCart from '../../components/Cart/RestaurantCart/RestaurantCart'
import CartPage1 from '../../components/Cart/CartPage/CartPage'
import { useHistory } from "react-router-dom"
import CardProduto from "../../components/Cart/CardProduto/CardProduto";
import Footer from '../../components/Footer/Footer';
import useProtectedPage from "../../hooks/useProtectedPage";
import { DivFooter, Pai, Body, ContainerAll, HeaderContainer, Wrap } from './styled';
import Header from '../../components/Header/Header';


const CartPage = () => {
    useProtectedPage()
    const history = useHistory()
    const [shipping, setShipping] = useState(0)
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])
    const [payment, setPayment] = useState("")
    const { user, getProfile, activeOrder, getActiveOrder } = useContext(GlobalContext)

    let totalProduto = 0

    useLayoutEffect(() => {
        getLocalStore()
        getProfile()
        getActiveOrder()

    }, [])



    const getLocalStore = () => {
        if (localStorage.getItem("cart") && localStorage.getItem("cart").length) {
            setCart(JSON.parse(localStorage.getItem("cart")))
        }
    }

    const cartList = cart.length > 0 && cart.map((cart) => {
        return (
            <CardProduto product={cart.product} qntd={cart.qnt} />
        )
    })

    const handlePayment = (event) => {
        setPayment(event.target.value)
    }

    const getShipping = (price) => {
        setShipping(price)
        setTotal(shipping + totalProduto)
    }

    for (let i = 0; i < cart.length; i++) {
        totalProduto = cart[i].product.price * parseInt(cart[i].qnt) + totalProduto
    }



    const BuyFood = () => {
        const id = cart[0].resID
        let body = {}


        const result = cart.length > 0 && cart.map(cart => ({ id: cart.product.id, quantity: cart.qnt }))

        body.products = result
        body.paymentMethod = payment



        axios.
            post(`${url}/restaurants/${id}/order`, body, {
                headers: {
                    auth: localStorage.getItem('token-login')
                }
            })
            .then((res) => {
                localStorage.removeItem('cart')
                getLocalStore()
                document.location.reload();
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }


    const currency = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    return (
        <Body>
            <ContainerAll>
                <Wrap>
                    <div id="Wrap">
                        <HeaderContainer>
                            <Header />
                            <h1>Seus pedidos</h1>
                        </HeaderContainer>
                        {cartList && localStorage.getItem("cart") ? (

                            <div id="WrapMainContainer">
                                <div id="WrapMain">
                                    <div id="WrapMain">
                                        <RestaurantCart id={cart[0].resID} shippingPrice={getShipping} />
                                        {cartList}

                                        <Pai>
                                            <h3>Compra: {currency.format(totalProduto)}</h3>
                                        </Pai>

                                        <CartPage1 Payment={handlePayment} />
                                        <button onClick={BuyFood} >Confirmar</button>
                                    </div>
                                </div>
                            </div>


                        ) : activeOrder ? (
                            <div>
                                <h2>Pedido Feito</h2>
                                <h3>{activeOrder.restaurantName}</h3>

                            </div>
                        ) :
                            "Carrinho Vazio"}
                        <DivFooter>
                            <Footer
                                history={history}
                            />
                        </DivFooter>
                    </div>
                </Wrap>
            </ContainerAll>
        </Body>


    )
}


export default CartPage;