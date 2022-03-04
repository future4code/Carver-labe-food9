import styled from "styled-components";


export const DivFooter = styled.div`
background: #fff;
width: 30vw;
height: 9vh;
display:flex;
align-content: space-around;
align-items: center;
justify-content: space-evenly;
border-radius: 0px 0px 15px 15px;
position: absolute;
top:82.2%;
left: 35%;
@media (max-width: 768px) {
    width: 100vw;
    position: fixed;
    bottom:0;
    top:91%;
    left:0%;
}
`
export const Body = styled.div`
border:1px solid green;
width: 100vw;
height: 100vh;
display:grid;
justify-items: center;

`
export const ContainerAll = styled.div`
border:1px solid green;
display:grid;
justify-items: center;
width: 100%;
height: 100%;
`

export const Wrap = styled.div`
display:flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
margin-top: 2%;
width: 30%;
height: 90%;

#WrapMainContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    display-flex: column;
    width: 30vw;
    height: 58vh;
    border-radius: 0px 0px 15px 15px;

}
#Wrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    height: 100vh;
}
 #WrapMain{
    overflow:auto;
     float: inherit ;
     width: 29vw;
    height: 57vh;
    border-radius: 0px 0px 15px 15px;
} 

-webkit-box-shadow: 9px 9px 0px 1px rgba(190,0,0,0), 1px 2px 7px 3px rgba(190,0,0,0.74), 1px 2px 7px 3px rgba(190,0,0,0.74); 
box-shadow: 9px 9px 0px 1px rgba(190,0,0,0), 1px 2px 7px 3px rgba(190,0,0,0.74), 1px 2px 7px 3px rgba(190,0,0,0.74);

h2{
        display: block;
    font-family: Poppins-Bold;
    font-size: 30px;
    color: #333;
    line-height: 1.2;
    text-align: center;
    }
    input{
        font-family: Poppins-Regular;
    font-size: 15px;
    color: #555;
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 45px;
    background: 0 0;
    padding: 0 5px;
    }
    @media (max-width: 768px) {
    #Wrap{
    width: 96vw;
    height: 97vh;
    }
     width: 96vw;
     height: 97vh;
    box-shadow:none;
    #WrapMainContainer{
    flex-direction: column;
    display: flex;
    align-items: center;
    display-flex: column;
    width: 96vw;
    height: 66vh;
}
#WrapMain{
    overflow:auto;
     float: inherit ;
     width: 95vw;
    height: 65vh;
} }

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

export const Container = styled.div`
    overflow:hidden;
    position: relative;
    width: 50%;
    margin: 0 auto;
    border: 1px solid #b8b8b8;
    border-radius: 5px;
    input{
        overflow-y:hidden;
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
overflow:auto;
width: 22rem;
height: 50px;
display: flex;
flex-direction: column;
align-content: center;
flex-wrap: wrap;
align-content: space-between;
width: 100%;
`

export const ButtonFilter = styled.button`
    width: 32%;
    font-size: 0.8rem;
    font-family: Oxygen;
    margin: 0 auto;
    border: none;
`

export const HeaderContainer = styled.div`
    position: relative;
    overflow:hidden;
    float: inherit ;
    width: 30vw;
    height: 25vh;
    @media (max-width: 768px) {
    width: 96vw;
    height: 26vh;
    }
`

