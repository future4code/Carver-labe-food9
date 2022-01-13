import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import CartPage from "../pages/CartPage/CartPage"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PerfilPage from "../pages/PerfilPage/PerfilPage"
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import WelcomePage from "../pages/WelcomePage/WelcomePage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import RegisterAdressPage from "../pages/RegisterAdressPage/RegisterAdressPage"


const Router =() => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/welcome">
                    <WelcomePage/>
                </Route>
                <Route exact path="/signup">
                    <SignUpPage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/restaurant/:restaurantId">
                    <RestaurantPage/>
                </Route>
                <Route exact path="/cart">
                    <CartPage/>
                </Route>
                <Route exact path="/perfil">
                    <PerfilPage/>
                </Route>
                <Route exact path="/address">
                    <RegisterAdressPage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;