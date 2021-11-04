import {useEffect, useState} from 'react'

import {
    Route,
    Redirect   
} from 'react-router-dom'

import {useAuth} from '../contexts/Auth'

function PublicRoute({children, ...rest}) {

    const {currentUser, setCurrentUser} = useAuth()

    const [islogin, setLoggedIn] = useState(0)

    useEffect(() => {
        const isloggedIn = parseInt(localStorage.getItem('loggedIn'))
        if (isloggedIn === 1){
            setLoggedIn(isloggedIn)
            setCurrentUser(1)
        }
    })

    if(islogin)
        return <Redirect to={{pathname:"/dashboard"}} />

    return (
        <Route>
            {children}
        </Route>
    )
}

export default PublicRoute
