import styled from "styled-components";

export const Pai = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: row;
    border: 1px solid #b8b8b8;
    font-family: Oxygen;
    border-radius: 8px;
    margin: 10px 0;
    align-items: flex-end;
`

export const Img = styled.img`
    width: 32%;
    height: 100%;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    

    h2{
        color: #e8222e;
        margin: 0;
    }

    p{
        color: #b8b8b8;
    }

    h3{
        margin: 0;
    }
`

export const Button = styled.button`
    width: 40%;
    height: 25px;
    align-self: flex-end;


`