import * as React from 'react'
// import { Redirect, Route } from 'react-router'

import {
    Route,
    Redirect
} from 'react-router-dom';

import {useAuth} from '../contexts/Auth'


function PrivateRouter({children, ...rest}) {
    const { currentUser } = useAuth()


    return (
       
       <Route
            {...rest}
            render={({location}) => currentUser
                    ? (children)
                    : (
                        <Redirect
                            to={{
                                pathname: "/not-logged-in",
                                state:{from:location}
                            }}
                        />
                    )
            }
        />
    )
}

export default PrivateRouter
