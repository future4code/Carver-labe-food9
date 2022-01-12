import styled from "styled-components";


export const Body = styled.div`
max-width: 100%;
overflow-x: hidden;
display: flex;
flex-direction: column;
`

export const Card = styled.div`
    width: 99%;
    height: flex;
    border: 1px solid #b8b8b8;
    border-radius: 8px;
    margin: 15px 0;
`

export const Img = styled.div`
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

export const Title = styled.div`
    color: #e8222e;
    font-size: 0.9rem;
    font-family: Oxygen;
    height: flex;
`

export const Time = styled.div`
    color: #b8b8b8;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 1.1rem;
    font-family: Oxygen;

`


export const Container = styled.div`
    position: relative;
    width: 94%;
    margin: 0 auto;
    /* border:1px solid; */
    border: 1px solid #b8b8b8;
    border-radius: 5px;




    input{
        width: 90%;
        height: 40px;
        margin-left: 30px;
        border-style: hidden;
        font-size: 1rem;
    }

    img{
        position: absolute;
        padding-top: 9px;
        padding-left: 5px;
    }
`


export const ButtonActive = styled.button`
    background-color: transparent;
    border-style: hidden;
    font-family: Oxygen;
    font-size: 1rem;
    
    :focus{
        color: red;
    }
`

export const Buttons = styled.div`
    overflow-x: auto;
    width: 22rem;
    height: 50px;
    white-space: nowrap;
    display: flex;
    flex-direction: row;

`

export const ButtonFilter = styled.button`
    width: 32%;
    font-size: 0.8rem;
    font-family: Oxygen;
    margin: 0 auto;
`