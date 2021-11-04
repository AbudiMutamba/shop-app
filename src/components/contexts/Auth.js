// import React, { Children } from 'react'
import { 
    createContext,
    useContext, 
    useState,
    useEffect
} from 'react'

const AuthContext = createContext()

export function useAuth() {
    return useContext( AuthContext )
}

function AuthProvider({children}) {

    const [currentUser, SetCurrentUser] = useState(null)
    
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const loggedIn = parseInt(localStorage.getItem('loggedIn'))
        if (loggedIn === 1)
            SetCurrentUser(loggedIn)
            // console.log(currentUser)
    },[])

    const value = {
        loading,
        currentUser,
        SetCurrentUser,
        setLoading
    }

    return (
        
       <AuthContext.Provider value={value}>
           {children}
       </AuthContext.Provider>
    )
}

export default AuthProvider
