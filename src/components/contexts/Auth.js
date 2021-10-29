import React, { Children } from 'react'

// import { createContent, useContext, useState} from 'react';

const AuthContext = React.createContext()

export function useAuth() {
    return React.useContext( AuthContext )
}

function AuthProvider() {

    const [currentUser, SetCurrentUser] = React.useState(null)
    
    const [loading, setLoading] = React.useState(true)

    const value = {
        loading,
        currentUser,
        SetCurrentUser,
        setLoading
    }

    return (
        
       <AuthContext.Provider value={value}>
           {Children}
       </AuthContext.Provider>
    )
}

export default AuthProvider
