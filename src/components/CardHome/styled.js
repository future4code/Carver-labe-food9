import styled from "styled-components"

export const MainCard = styled.div`
    width: 99%;
    height: flex;
    padding: 0 0 1rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;

`

export const ImgCard = styled.img`
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: center;

    img{
        width: 100%;
        height: 140px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
`

export const RestauranteNome = styled.span`
    color: #e8222e;
    font-size: 0.9rem;
    font-family: Oxygen;
    height: flex;
`

export const RestauranteTempo = styled.span`
    color: #b8b8b8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 1.1rem;
    font-family: Oxygen;
`

export const RestauranteFrete = styled.span`
       color: #b8b8b8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 1.1rem;
    font-family: Oxygen;
`

export const ContainerFrete = styled.div`
    display: flex;
    justify-content: space-between;
`

export const RestauranteCard = styled.div`
    padding: 0 0 1rem;
    border-radius: 8px;
    /* border: solid 1px #b8b8b8; */
    justify-content: center;
`

export const ContainerNome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`