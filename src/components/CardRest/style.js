import styled from "styled-components";

export const Card = styled.button`
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