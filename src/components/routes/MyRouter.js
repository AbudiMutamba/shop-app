import * as React from 'react'

import Login from '../views/Login'

import Account from '../views/Account'

import Home from '../views/Home'

import Cart from '../views/Cart'

import Checkout from '../views/Checkout'

import Dashboard from '../views/Dashboard'

import Pay from '../views/Pay'


import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'

function MyRouter() {
    //const [page, setPage] = React.useState(null)

    return (
        <Router>
           
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/login" exact>
                    <Login />
                </Route>

                <Route path="/dashboard" >
                    <Dashboard />
                </Route>

                <Route path="/Account">
                    <Account />
                </Route>

                <Route path="/cart">
                    <Cart />
                </Route>

                <Route path="/checkout">
                    <Checkout />
                </Route>

                <Route path="/pay">
                    <Pay />
                </Route>

            </Switch>

        </Router>
    )
}

export default MyRouter
