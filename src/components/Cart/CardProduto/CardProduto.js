import React, { useContext, useEffect, useState } from 'react'
import Modal from "@material-ui/core/Modal";
import ModalComponent from "../../Modal/Modal"
import {Pai, Img, Titulo, Button} from './style'
import GlobalContext from "../../../context/GlobalContext"




const CardProduto = ({ product, qntd, restaurantId }) => {
    const { name, description, photoUrl, price, id } = product
    const [open, setOpen] = useState(false)

    const { cart, removeCart, activeOrder, getActiveOrder } = useContext(GlobalContext)

    const closeButton = () => {
        setOpen(false)
    }

    useEffect(() => {
        getActiveOrder()
        closeButton()
    }, [cart])

    function checkCartRes() {
        if (cart[0] && restaurantId && cart[0].resID !== restaurantId) {
            return (false)
        } else if (cart[0] && cart[0].resID === restaurantId) {
            return (true)
        }
        return (true)
    }

    function inCart() {
        const valor = cart.length
        for (let i = 0; i < valor; i++) {
            if (cart[i].product.id === id) {
                return (true)
            } else if (cart[i] && cart[i].product.id === restaurantId) {
                return (false)
            }
        }
    }

    const currency = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    })

    return (
        <div>
            <Pai>
                <>
                    <Img src={photoUrl} />
                </>

                <div>
                    <div>
                        <Titulo>{name}</Titulo>
                        {qntd && (<div><p>Quantidade: {qntd}</p></div>)}
                    </div>
                    <p>{description}</p>

                    <div>
                        <p>{currency.format(price)}</p>

                        <div>
                            {checkCartRes() ? (

                                <Button inCart={inCart()} onClick=

                                    {() => { !inCart() ? (activeOrder ? alert("Aguarde seu ultimo pedido ser finalizado") : setOpen(true)) : removeCart(id) }}>

                                    {!inCart() ? "Adicionar" : "Remover"}

                                </Button>
                            ) :
                                <p>Um pedido por restaurante</p>
                            }
                        </div>

                    </div>
                </div>

            </Pai>

            <Modal 
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{
                    padding: "1rem", display: "flex",
                    alignItems: 'center', justifyContent: 'center'
                }}
            >

                <ModalComponent
                    product={product}
                    resID={restaurantId}
                    close={() => closeButton(false)}
                />
            </Modal>
        </div>
    )
}

export default CardProduto