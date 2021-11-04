import * as React from 'react'

import PrivateRouter from './PrivateRouter'

import PublicRoute from './PublicRoute'

import NotLoggedIn from '../views/NotLoggedIn'

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
   

    return (
        <Router>
           
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/not-logged-in" >
                    <NotLoggedIn />
                </Route>
                
                <Route path="/login" >
                    <Login />
                </Route>

                <Route path="/not-authorized" >
                    <NotAuthorized />
                </Route>

                <PrivateRouter path= "/dashboard" >
                    <Dashboard />
                </PrivateRouter>

                <PrivateRouter path="/account">
                    <Account />
                </PrivateRouter>

                <Route path="/cart">
                    <Cart />
                </Route>

                <Route path="/checkout">
                    <Checkout />
                </Route>

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
