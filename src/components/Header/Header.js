import React from "react";
import { Div } from './style'
import logo from '../../Images/logo-future.png'

const Header = () => {
    return (
        <Div>
            <img src={logo} />
            <hr></hr>
        </Div>
    )
}
export default Header