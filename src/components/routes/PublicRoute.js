import * as React from 'react'

import {
    Route,
    Redirect   
} from 'react-router-dom'

import {useAuth} from '../contexts/Auth'

function PublicRoute({Children, ...rest}) {

    const {currentUser} = useAuth()


    return (
        <Route
            {...rest}
            render= {({location}) => currentUser
                ? (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state:{from:location}
                        }}
                    />
                )
              :
               (Children)
            }
        />
    )
}

export default PublicRoute
