import styled from "styled-components"

export const DivPai = styled.div`
    max-width: 100%;
    overflow-x: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Img = styled.div`
    width: 6.5rem;
  height: 3.625rem;
  margin: 4.25rem 8rem 1rem;
  object-fit: contain;

`


export const Title = styled.div`
    width: 22.5rem;
  height: 2.625rem;
  margin: 1rem 0 0;
  padding: 0.75rem 2rem;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;

`


export const H1 = styled.span`
    width: 18.5rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1.2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  
`

export const Form = styled.form`
    height: flex;
    flex-direction: column;
    width: 100%;


    input{
        width: 81%;
        height: 1.6rem;
        margin: 0.5rem 0 0;
        padding: 1.188rem 3rem 1.188rem 1rem;
        border-radius: 2px;
        border: solid 1px #b8b8b8;
        font-size: 1.1rem;
        margin-bottom: 6px;

        @media(max-width: 320px){
          width: 78%;
        }
        /* @media(max-width: 360px){
        width: 17.2rem;
    }
        @media(min-width: 411px){
        width: 18.2rem;
    } */

    }

    button{
        background-color: #e8222e;
        height: 3rem;
        margin: 0.5rem 0 0;
        width: 98%;
        border-style: hidden;
        border-radius: 3px;
        font-size: 1rem;
        cursor: pointer;
        
        @media(max-width: 320px){
          width: 99%;
        }
    }

`

export const Button = styled.button`
    background: transparent;
    border-style: hidden;
    padding-top: 15px;
    font-size: 1rem;
    cursor: pointer;

`