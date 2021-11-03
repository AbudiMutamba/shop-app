import * as React from 'react'

import PrivateRouter from './PrivateRouter'

import PublicRoute from './PublicRoute'

import Login from '../views/Login'

import Account from '../views/Account'

import Home from '../views/Home'

import Cart from '../views/Cart'

import Checkout from '../views/Checkout'

import Dashboard from '../views/Dashboard'

import Pay from '../views/Pay'

import NotAuthorized from '../views/NotAuthorized'

import NotFound from '../views/NotFound'


import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'

function MyRouter() {
    //const [page, setPage] = React.useState(null)

    return (
        <Router>
           
            <Switch>
                <PublicRoute path="/" exact>
                    <Home />
                </PublicRoute>

                <PublicRoute path="/login" >
                    <Login />
                </PublicRoute>

                <PublicRoute path="/not-authorized" >
                    <NotAuthorized />
                </PublicRoute>

                <PrivateRouter path= "/dashboard" >
                    <Dashboard />
                </PrivateRouter>

                <PrivateRouter path="/account">
                    <Account />
                </PrivateRouter>

                <PublicRoute path="/cart">
                    <Cart />
                </PublicRoute>

                <PublicRoute path="/checkout">
                    <Checkout />
                </PublicRoute>

                <PrivateRouter path="/pay">
                    <Pay />
                </PrivateRouter>

                <Route path="*">
                    <NotFound />
                </Route>

            </Switch>

        </Router>
    )
}

export default MyRouter
